class Tennis {
	scorePlayer1:number = 0;
	scorePlayer2:number = 0;
		
	public gameScore(){
		
		return `${this.formatScore(this.scorePlayer1)} - ${this.formatScore(this.scorePlayer2)}`;
	}
	
	formatScore = (value:number):string=>{
		switch(value){
			case 0 : return "love";
			case 1 : return "fifteen";
		}
		return "";
	}
	
	public firstPlayerWinPoint(){
		this.scorePlayer1++;
	}
	
    
} 
export default Tennis;