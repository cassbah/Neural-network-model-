
function sigmoid(x){
	return 1/(1+ Math.exp(-x));
}

class NeuralNetwork{
  constructor(input_nodes,hidden_nodes,output_nodes){
	this.input_nodes=input_nodes;
	this.hidden_nodes=hidden_nodes;
	this.output_nodes=output_nodes;

	this.weights_ih=new Matrix(this.hidden_nodes,this.input_nodes);
	this.weights_ho=new Matrix(this.output_nodes,this.hidden_nodes);
	this.weights_ih.randomize();
	this.weights_ho.randomize();

	this.bias_h=new Matrix(this.hidden_nodes,1);
	this.bias_o=new Matrix(this.output_nodes,1);
	this.bias_h.randomize();
	this.bias_o.randomize();



  }

  feedforward(input_array){

  	//generating hidden outputs
    let inputs=Matrix.fromArray(input_array);
    let hidden=Matrix.multiply(this.weights_ih,inputs);
  	hidden.add(this.bias_h);
  	
  	//activation fuction
  	hidden.map(sigmoid);

  	//generating outputs output
    let output=Matrix.multiply(this.weights_ho,hidden);
  	output.add(this.bias_o);
  	output.map(sigmoid);

    return output.toArray();
  }

  train(inputs, answer){
  	let output=this.feedforward(inputs);
  	//conv array to Matrix obj
  	outputs=Matrix.fromArray(outputs);
  	targets=Matrix.fromArray(targets);
  	//calc error
  	//error=targets-outputs

  	let output_errors=Matrix.subtract(targets,outputs);
  	//calculate hidden layers

  	let who_t=Matrix.transpose(this.weights_ho);
    let hidden_errors=Matrix.multiply(who_t,output_errors);

  }

}