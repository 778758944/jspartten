/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-09 09:22:48
 * @version $Id$
 */
//策略模式
var data={
	first_name:"",
	last_name:"Jones",
	age:"unknow",
	username:"q__asas"
}


var validator={
	types:{},
	config:{},
	messages:[],//错误信息
	validate:function(data){
		// alert("jaja");
		var i,msg,type,checker,result_ok;
		this.messages=[];
		for(i in data){
			if(data.hasOwnProperty(i)){
				type=this.config[i];
				checker=this.types[type];
				if(!type){
					continue;
				}
				if(!checker){
					throw{
						name:"validationError",
						message:"no handle to validate type"+type
					}
				}
				result_ok=checker.validate(data[i]);
				if(!result_ok){
					msg="Invalid value for *"+i+"* "+checker.instructions;
					this.messages.push(msg);
				}
			}
		}
		return this.hasErrors();
	},
	hasErrors:function(){
		return this.messages.length!==0;
	}
};
validator.types.isNonEmpty={
	validate:function(value){
		return value!=="";
	},
	instructions:"the value can not be empty"
}

validator.types.isNumber={
	validate:function(value){
		return !isNaN(value);
	},
	instructions:"the value must be a number"
}

validator.types.isAlphaNum={
	validate:function(value){
		return !/[^a-z0-9]/i.test(value);
	},
	instructions:"the value can only contain characters and numbers,no special symbols"
}
validator.config={
	first_name:"isNonEmpty",
	age:"isNumber",
	username:"isAlphaNum"
}
validator.validate(data);
if(validator.hasErrors()){
	console.log(validator.messages.join("\n"));
}






















































































