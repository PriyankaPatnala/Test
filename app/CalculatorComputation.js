function calculatorComputation() {

    this.operand1 = "0";
    this.operand2 = "0";
    this.operator = 0;
    this.opflag = false;

}


calculatorComputation.prototype.setTextValue = function (displayInstance, val) {
    //var x= document.getElementsByClassName("display")[0];
    var disp = displayInstance;
    disp.value = val;
};


calculatorComputation.prototype.onNumberClick = function (val, displayObj) {

    if (this.operand2 == 0 && (this.operand2.indexOf('.') == -1)) {
        this.operand2 = val;
    }
    else {
        this.operand2 += val;
    }
    this.setTextValue(displayObj, this.operand2);
};


calculatorComputation.prototype.Dot = function(textObj) {

    if(this.operand2.length == 0 )
        this.operand2 = "0.";
    else {
        if( this.operand2.indexOf(".") == -1)
            this.operand2 += '.';

    }
    this.setTextValue( textObj, this.operand2);

};


//if "+-" button is clicked
calculatorComputation.prototype.PlusMinus = function(textObj) {

    if ( this.operand2.toString().indexOf("-") == 0 )    {
        this.operand2 = this.operand2.toString().substring(1);
    }
    else{
        this.operand2 = "-" + this.operand2;
    }
    this.setTextValue( textObj, this.operand2);
};

//if "CE" is clicked
calculatorComputation.prototype.Clear = function(textObj) {

    this.operand2 = "";
    this.setTextValue( textObj, this.operand2);};


//if "C" is clicked
calculatorComputation.prototype.allClear = function(textObj) {

    this.operand1 = "";
    this.operand2 = "";
    this.operator = 0;
    this.setTextValue( textObj, this.operand2);
};

//assigning values to operators
calculatorComputation.prototype.Operate = function(op,textObj) {


    if ( op.indexOf("*") > -1 ) { this.operator = 1; };       //codes for *
    if ( op.indexOf("/") > -1 ) { this.operator = 2; };       // slash (divide)
    if ( op.indexOf("+") > -1 ) { this.operator = 3; };       // sum
    if ( op.indexOf("-") > -1 ) { this.operator = 4; };       // difference
    if ( op.indexOf("%") > -1 ) { this.operator = 5; };       //modulus

    this.operand1 = this.operand2;                 //store value
    this.operand2 = "";                     //or we could use "0"
    this.setTextValue( textObj, this.operand2);
};

//computation of  2 numbers
calculatorComputation.prototype.Calculate = function(textObj){

    if ( this.operator == 1 ) { this.operand2 = Number(this.operand1) * Number(this.operand2); };
    if ( this.operator == 2 ) { this.operand2 = Number(this.operand1) / Number(this.operand2); };
    if ( this.operator == 3 ) { this.operand2 = Number(this.operand1) + Number(this.operand2); };
    if ( this.operator == 4 ) { this.operand2 = Number(this.operand1) - Number(this.operand2); };
    if ( this.operator == 5 ) { this.operand2 = Number(this.operand1) % Number(this.operand2); };

    this.operator = 0;                //clear this.operator
    this.operand1    = "0";              //clear this.operand1
    this.setTextValue( textObj, this.operand2);
};

calculatorComputation.prototype.onOperatorClick = function (val,textObj) {
    if(val == "." )
        this.Dot(textObj);
    else if( val == "+-" )
        this.PlusMinus(textObj);

    else if( val == "CE" )
        this.Clear(textObj);

    else if( val == "C" )
        this.allClear(textObj);
    else if( val == "+" || val == "-" || val == '*' || val == "/" || val == "%" ){
        this.Operate(val,textObj);
    }
    else if( val == "=" )
        this.Calculate(textObj);

};