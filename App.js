import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {  TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      operand:'',
      first:[],
      second:[],
      check:false,
      sign:'+'
    }
  }
  
  handlePress = (num) => {
    if(this.state.check){
      if(num ==='x'){
        let args = this.state.second
        args.pop()
        this.setState({second:args})
      }else{
        let args = this.state.second
        args.push(num)
        this.setState({second:args,op:''})
      }      
    }else{
      if(num==='x'){
        let args = this.state.first
        args.pop()
        this.setState({first:args})
      }else{
        let args = this.state.first
        args.push(num)
        this.setState({first:args})
      }
    }    
  }
  hanldeSign = () =>{
    if(this.state.check){
      if(this.state.sign==='+'){
        let args = this.state.second
        args.unshift('-')
        this.setState({sign:'-'})
      }else{
        let args = this.state.second
        args.shift()
        this.setState({sign:'+'})
      }
    }else if(!this.state.check){
      if(this.state.sign==='+'){
        let args = this.state.first
        args.unshift('-')
        this.setState({sign:'-'})
      }else{
        let args = this.state.first
        args.shift()
        this.setState({sign:'+'})
      }
    } 
  }
  handlePressOp = (item) =>{
    // if(this.state.check){
    //   let firsts = this.state.first
    //   let hold = this.state.first
    //   let seconds = this.state.second
    //   firsts = Number(firsts.join(""))
    //   seconds = Number(seconds.join(""))
    //   let answw = firsts+seconds
    //   hold.push
    //   this.setState({first:answw,second:[]})
    // }
    this.setState({check:true,operand:item,op:item,sign:'+'})
  }
  handlePressEq = (item) =>{
    let ans
    if(this.state.operand==='+'){
      let num1 = this.state.first
      num1 = Number(num1.join(""))
      let num2 = this.state.second
      num2 = Number(num2.join(""))
      ans = num1+num2
    }else if(this.state.operand==='-'){
      let num1 = this.state.first
      num1 = Number(num1.join(""))
      let num2 = this.state.second
      num2 = Number(num2.join(""))
      ans = num1-num2
    }else if(this.state.operand==='X'){
      let num1 = this.state.first
      num1 = Number(num1.join(""))
      let num2 = this.state.second
      num2 = Number(num2.join(""))
      ans = num1*num2
    }else if(this.state.operand==='/'){
      let num1 = this.state.first
      num1 = Number(num1.join(""))
      let num2 = this.state.second
      num2 = Number(num2.join(""))
      ans = num1/num2
    }else if(this.state.operand==='%'){
      let num1 = this.state.first
      num1 = Number(num1.join(""))
      let num2 = this.state.second
      num2 = Number(num2.join(""))
      ans = num1%num2
    }    
    this.setState({answer:ans,first:[],second:[],check:false})
  }
  handleClear = () =>{
    this.setState({first:[],second:[],answer:'',check:false,op:''})
  }
  render(){
  return (
    <View style={{flex:1}}>
      <View style={{height:21,backgroundColor:"rgb(22, 10, 15)"}} />
      <View style={{flex:1,backgroundColor:"rgb(22, 10, 15)",height:70}}>
        <View style={{margin:20,alignItems:"flex-end"}}>
          <Text style={{color:"#fff",fontSize:50}}>{this.state.check?this.state.second:this.state.first}</Text>
          <Text style={{color:"#fff",fontSize:50,marginTop:35}}>{this.state.answer}</Text>
        </View>
        <TouchableWithoutFeedback style={{alignItems:'flex-end'}} onPress={()=>this.handlePress('x')}>
          <Text style={{color:"#fff",fontSize:27,backgroundColor:'rgb(133, 118, 118)',paddingLeft:8,paddingRight:8,marginRight:10,textAlign:'center',marginTop:12}}>x</Text>
        </TouchableWithoutFeedback>
      </View>
      <View  style={{height:355}}>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handleClear()} ><Text style={styles.text}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.butt} onPress={()=>{this.hanldeSign()}}><Text style={styles.text}>+/-</Text></TouchableOpacity>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handlePressOp('%')} ><Text style={styles.text}>%</Text></TouchableOpacity>
          {
          this.state.op==='/'?<TouchableOpacity style={styles.active} 
           onPress={()=>this.handlePressOp('/')} ><Text style={styles.opTex}>/</Text></TouchableOpacity>:<TouchableOpacity style={styles.opText}  onPress={()=>this.handlePressOp('/')} ><Text style={styles.opTex}>/</Text></TouchableOpacity>
          }
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handlePress("7")} ><Text style={styles.text}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handlePress("8")} ><Text style={styles.text}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handlePress("9")} ><Text style={styles.text}>9</Text></TouchableOpacity>
          {
          this.state.op==='X'?<TouchableOpacity style={styles.active} 
           onPress={()=>this.handlePressOp('X')} ><Text style={styles.opTex}>X</Text></TouchableOpacity>:<TouchableOpacity style={styles.opText}  onPress={()=>this.handlePressOp('X')} ><Text style={styles.opTex}>X</Text></TouchableOpacity>
          }
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handlePress("4")} ><Text style={styles.text} >4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handlePress("5")} ><Text style={styles.text} >5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handlePress("6")} ><Text style={styles.text} >6</Text></TouchableOpacity>
          {
          this.state.op==='-'?<TouchableOpacity style={styles.active} 
           onPress={()=>this.handlePressOp('-')} ><Text style={styles.opTex}>-</Text></TouchableOpacity>:<TouchableOpacity style={styles.opText}  onPress={()=>this.handlePressOp('-')} ><Text style={styles.opTex}>-</Text></TouchableOpacity>
          }
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity style={styles.butt}onPress={()=>this.handlePress("1")} ><Text style={styles.text}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.butt}onPress={()=>this.handlePress("2")} ><Text style={styles.text}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.butt}onPress={()=>this.handlePress("3")} ><Text style={styles.text}>3</Text></TouchableOpacity>
          {
          this.state.op==='+'?<TouchableOpacity style={styles.active} 
           onPress={()=>this.handlePressOp('+')} ><Text style={styles.opTex}>+</Text></TouchableOpacity>:<TouchableOpacity style={styles.opText}  onPress={()=>this.handlePressOp('+')} ><Text style={styles.opTex}>+</Text></TouchableOpacity>
          }
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handlePress(0)} ><Text style={styles.text}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.butt} onPress={()=>this.handlePress(".")} ><Text style={styles.text}>.</Text></TouchableOpacity>          
          <TouchableOpacity style={styles.eqText} onPress={()=>this.handlePressEq('=')} ><Text style={styles.eqTex}>=</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butt:{
    flex:1,
    padding:15,
    backgroundColor:"rgb(146, 71, 0)",
    borderLeftWidth:0.3,
    borderRightWidth:0.3,
    borderBottomWidth:0.3,
    borderTopWidth:0.3,
    borderBottomColor:"rgb(34, 33, 32)",
    borderRightColor:"rgb(34, 33, 32)",
    borderLeftColor:"rgb(34, 33, 32)",
    borderTopColor:"rgb(34, 33, 32)",
  },
  text:{
    fontSize:30,
    textAlign:"center",
    color:"#fff"
  },
  opText:{
    backgroundColor:"rgb(209, 203, 203)",
    flex:1,
    padding:15,
    borderLeftWidth:0.3,
    borderRightWidth:0.3,
    borderBottomWidth:0.3,
    borderTopWidth:0.3,
    borderBottomColor:"rgb(34, 33, 32)",
    borderRightColor:"rgb(34, 33, 32)",
    borderLeftColor:"rgb(34, 33, 32)",
    borderTopColor:"rgb(34, 33, 32)",
  },
  opTex:{
    fontSize:30,
    textAlign:"center",
    color:"rgb(36, 35, 35)"
  },
  active:{
    backgroundColor:"rgb(255, 255, 255)",
    flex:1,
    padding:15,
    borderBottomWidth:0.9,
    borderTopWidth:0.9,
    borderBottomColor:"rgb(0, 0, 0)",
    borderRightColor:"rgb(0, 0, 0)",
    borderLeftColor:"rgb(0, 0, 0)",
    borderTopColor:"rgb(0, 0, 0)",
  },
  eqText:{
    flex:2,
    backgroundColor:"rgb(209, 203, 203)",
    padding:31,
    borderLeftWidth:0.3,
    borderRightWidth:0.3,
    borderBottomWidth:0.3,
    borderTopWidth:0.3,
    borderBottomColor:"rgb(34, 33, 32)",
    borderRightColor:"rgb(34, 33, 32)",
    borderLeftColor:"rgb(34, 33, 32)",
    borderTopColor:"rgb(34, 33, 32)",
  },
  eqTex:{
    fontSize:70,
    textAlign:"center",
    color:"rgb(36, 35, 35)",
    marginTop:-41
} 
});
