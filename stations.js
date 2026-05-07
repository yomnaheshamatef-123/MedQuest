function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, image) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.landcount = 0;
	this.image = image || "";

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}


function corrections() {
	document.getElementById("cell1name").textContent = "α-KG complex";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Luxury Tax. Pay $100.");
}

function citytax() {
	addAlert(player[turn].name + " paid $200 for landing on City Tax.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on City Tax. Pay $200.");
}

var square = [];

square[0] = new Square("START", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF", "images/start.png");
square[1] = new Square("α-KG complex", "75 ATP", "#00bf63", 75, 1, 25, 50);
square[2] = new Square("Special Station", "Draw a special card!", "#5643b6");
square[3] = new Square("Citrate synthase", "75 ATP", "#00bf63", 75, 1, 25, 50);
square[4] = new Square("Special Station", "Draw a special card!", "#5643b6");
square[5] = new Square("RNA polymerase", "30 ATP", "#792a18", 30, 0, 10);
square[6] = new Square("Special Station", "Draw a special card!", "#5643b6");
square[7] = new Square("Billverdin reductase", "75 ATP", "#c28ba0", 75, 0, 25);
square[8] = new Square("Acyl CoA dehydrogenase", "45 ATP", "#b495f1", 45, 2, 15, 106);
square[9] = new Square("HSL", "45 ATP", "#b495f1", 45, 2, 15, 106);
square[10] = new Square("Enzyme Inhibition Zone", "YOU ARE IN THE ENZYME INHIBITION ZONE", "#fec36a");
square[11] = new Square("G6P", "60 ATP", "#72b0ff", 60, 3, 20, 40, 60);
square[12] = new Square("PEPCK", "60 ATP", "#72b0ff", 60, 3, 20, 40, 60);
square[13] = new Square("Pyruvate carboxylase", "60 ATP", "#72b0ff", 60, 3, 20, 40, 60);
square[14] = new Square("Telomerase", "60 ATP", "#ce8e72", 60, 0,20);
square[15] = new Square("guanylyl transferase", "30 ATP", "#FFA500", 30, 8, 10);
square[16] = new Square("Methyl transferase", "30 ATP", "#FFA500", 30, 8, 10);
square[17] = new Square("Free Oxidation Station", "", "#e06265");
square[18] = new Square("Glycogen phosph-orylase", "18 ATP", "#efc131", 18, 4);
square[19] = new Square("Glycogen synthase", "60 ATP", "#efc131", 60, 4);
square[20] = new Square("Phospho-glycerate kinase", "60 ATP", "#5e8993", 60, 5, 20, 40, 70);
square[21] = new Square("Pyruvate kinase", "60 ATP", "#5e8993", 60, 5, 20, 40, 70);
square[22] = new Square("Hexo-kinase", "60 ATP", "#5e8993", 60, 5, 20, 40, 70);
square[23] = new Square("Special Station", "Draw a special card!", "#5643b6");
square[24] = new Square("Dna polymerase alpha  (primase) ", "110 ATP", "#f8c7b3", 110, 6, 35);
square[25] = new Square("Dna polymerase beta (repair)", "30 ATP", "#f8c7b3", 30, 6, 10);
square[26] = new Square("Dna polymerase gamma (mitochondrial)", "300 ATP", "#5643b6", 300, 6, 100);
square[27] = new Square("Metabolic Pause", "You can call an auction if you want", "#fec36a");
square[28] = new Square("Dna polymerase delta (lagging)", "100 ATP", "#008000", 100, 6, 35);
square[29] = new Square("Dna polymerase epsilon (leading)", "30 ATP", "#008000", 30, 6, 10);
square[30] = new Square("CPS 1 & Ornithine trans-carbamylase", "60 ATP", "#ee2b7a", 60, 7);
square[31] = new Square("Arginino-succinate synthase & Arginase", "30 ATP", "#ee2b7a", 30, 7);
square[32] = new Square("Acetyl CoA carboxylase (ACC)", "180 ATP", "#b495f1", 180, 0, 60);
square[33] = new Square("Pyruvate dehydro-genase", "105 ATP", "#f79326", 105, 0);

// Enzyme Cofactor Cards
var enzymeCards = [];

enzymeCards[0] = new Card("CoASH.<br><br>Skip the next rent", function(p) { drawEnzymeCard(p); });
enzymeCards[1] = new Card("CoASH.<br><br>Lose one of your properties", function(p) { drawEnzymeCard(p); });

enzymeCards[2] = new Card("ADP.<br><br>Move forward 2 spaces", function(p) { drawEnzymeCard(p); });
enzymeCards[3] = new Card("ADP.<br><br>Move back 2 spaces", function(p) { drawEnzymeCard(p); });

enzymeCards[4] = new Card("Mg2+.<br><br>Move forward 1 space", function(p) { drawEnzymeCard(p); });
enzymeCards[5] = new Card("Mg2+.<br><br>Move back 1 space", function(p) { drawEnzymeCard(p); });

enzymeCards[6] = new Card("Biotin.<br><br>Roll the dice again", function(p) { drawEnzymeCard(p); });
enzymeCards[7] = new Card("Biotin.<br><br>Freeze for the next 2 turns", function(p) { drawEnzymeCard(p); });

enzymeCards[8] = new Card("GTP.<br><br>Double your rent for 1 round", function(p) { drawEnzymeCard(p); });
enzymeCards[9] = new Card("GTP.<br><br>Lose 20 ATP points", function(p) { drawEnzymeCard(p); });

enzymeCards[10] = new Card("CO2.<br><br>Skip the next rent", function(p) { drawEnzymeCard(p); });
enzymeCards[11] = new Card("CO2.<br><br>Move back 4 spaces", function(p) { drawEnzymeCard(p); });

enzymeCards[12] = new Card("cAMP.<br><br>Gain 20 ATP points", function(p) { drawEnzymeCard(p); });
enzymeCards[13] = new Card("cAMP.<br><br>Go to Enzyme Inhibition Zone", function(p) { drawEnzymeCard(p); });

enzymeCards[14] = new Card("FAD.<br><br>Move forward 4 spaces", function(p) { drawEnzymeCard(p); });
enzymeCards[15] = new Card("FAD.<br><br>Freeze for the next turn", function(p) { drawEnzymeCard(p); });

enzymeCards[16] = new Card("UDP Glucose.<br><br>Roll the dice again", function(p) { drawEnzymeCard(p); });
enzymeCards[17] = new Card("UDP Glucose.<br><br>Go to Enzyme Inhibition Zone", function(p) { drawEnzymeCard(p); });

enzymeCards[18] = new Card("Pi.<br><br>Draw an additional card", function(p) { drawEnzymeCard(p); });
enzymeCards[19] = new Card("Pi.<br><br>Lose 5 ATP points", function(p) { drawEnzymeCard(p); });

enzymeCards[20] = new Card("NAD+.<br><br>Collect 10 ATP from each player", function(p) { drawEnzymeCard(p); });
enzymeCards[21] = new Card("NAD+.<br><br>Pay 15 ATP to the previous player", function(p) { drawEnzymeCard(p); });

enzymeCards[22] = new Card("PARP-1.<br><br>Draw 2 cards on your next enzyme station", function(p) { drawEnzymeCard(p); });
enzymeCards[23] = new Card("PARP-1.<br><br>Pay 15 ATP to the next player", function(p) { drawEnzymeCard(p); });

enzymeCards[24] = new Card("TPP.<br><br>Gain 10 ATP points", function(p) { drawEnzymeCard(p); });
enzymeCards[25] = new Card("TPP.<br><br>Can't buy your next enzyme station", function(p) { drawEnzymeCard(p); });

enzymeCards[26] = new Card("NADPH.<br><br>Collect 10 ATP from each player", function(p) { drawEnzymeCard(p); });
enzymeCards[27] = new Card("NADPH.<br><br>Lose 10 ATP points", function(p) { drawEnzymeCard(p); });

enzymeCards[28] = new Card("Transcription factors.<br><br>Draw an additional card", function(p) { drawEnzymeCard(p); });
enzymeCards[29] = new Card("Transcription factors.<br><br>Freeze for the next 2 turns", function(p) { drawEnzymeCard(p); });

enzymeCards[30] = new Card("Ca2+.<br><br>Draw two cards on your next enzyme station", function(p) { drawEnzymeCard(p); });
enzymeCards[31] = new Card("Ca2+.<br><br>Don't receive ATP the next round", function(p) { drawEnzymeCard(p); });

enzymeCards[32] = new Card("Lipoic acid.<br><br>Collect rent of your current station from each player", function(p) { drawEnzymeCard(p); });
enzymeCards[33] = new Card("Lipoic acid.<br><br>Move back 1 space", function(p) { drawEnzymeCard(p); });

enzymeCards[34] = new Card("SAM.<br><br>Roll the dice again twice", function(p) { drawEnzymeCard(p); });
enzymeCards[35] = new Card("SAM.<br><br>Freeze for the next 3 turns", function(p) { drawEnzymeCard(p); });


// Special Cards
var specialCards = [];

specialCards[0] = new Card("Insulin Stimulation.<br><br>Gain 25 ATP points and draw another special card", function(p) { p.atp += 25; drawSpecialCard(); });

specialCards[1] = new Card("Insulin Inhibition.<br><br>Miss your next turn and lose 15 ATP points", function(p) { p.missNextTurn = true; p.atp -= 15; });

specialCards[2] = new Card("Glucagon Inhibition.<br><br>Reverse the effect of your last turn", function(p) { p.reverseLastEffect(); });

specialCards[3] = new Card("Glucagon Stimulation.<br><br>Combine two enzyme stations to create a metabolic pathway, doubling the ATP points gained from both for the next three turns", function(p) { p.combineStations = true; p.doublePathwayATP = 3; });

specialCards[4] = new Card("Increased Metabolic Rate.<br><br>For your next 3 turns, double the ATP rent earned from all enzyme stations", function(p) { p.doubleRentTurns = 3; });

specialCards[5] = new Card("Feedback Inhibition.<br><br>Lose the ability to draw enzyme cards for the next 2 turns", function(p) { p.noDrawTurns = 2; });

specialCards[6] = new Card("Epinephrine Stimulation.<br><br>Instantly gain 10 ATP points", function(p) { p.atp += 10; });

specialCards[7] = new Card("Epinephrine Inhibition.<br><br>Lose 15 ATP points instantly", function(p) { p.atp -= 15; });

specialCards[8] = new Card("Lactic Acidosis.<br><br>Lose two enzyme stations", function(p) {p.loseTwoStations = true; });



// Disease Cards
var diseaseCards = [];

// Ketosis
diseaseCards[0] = new Card("Ketosis (Positive). Store 20 ATP points that cannot be lost due to penalties for the next three turns", function(p) { p.storedATP = 20; p.storedATPturns = 3; });
diseaseCards[1] = new Card("Ketosis (Negative). Lose the ability to draw enzyme cards for the next 2 turns", function(p) { p.noDrawTurns = 2; });

// Jaundice
diseaseCards[2] = new Card("Jaundice (Positive). Instantly gain 50 ATP points", function(p) { p.atp += 50; });
diseaseCards[3] = new Card("Jaundice (Negative). Go to Enzyme Inhibition Zone", function(p) { gotojail(p); });

// Pyruvate Kinase Deficiency
diseaseCards[4] = new Card("Pyruvate Kinase Deficiency (Positive). For the next 3 turns, halve any ATP points gained from enzyme stations", function(p) { p.halfRentTurns = 3; });
diseaseCards[5] = new Card("Pyruvate Kinase Deficiency (Negative). For your next 3 turns, double the ATP rent earned from all enzyme stations", function(p) { p.doubleRentTurns = 3; });

// Pyruvate Carboxylase Deficiency
diseaseCards[6] = new Card("Pyruvate Carboxylase Deficiency (Positive). Discard one enzyme card and lose 10 ATP points", function(p) { p.loseOneCard = true; p.atp -= 10; });
diseaseCards[7] = new Card("Pyruvate Carboxylase Deficiency (Negative). Pay ATP rent for your own enzymes in the current turn", function(p) { p.payOwnRent = true; });

// PEPCK Deficiency
diseaseCards[8] = new Card("PEPCK Deficiency (Positive). Miss your next turn and lose 15 ATP points", function(p) { p.missNextTurn = true; p.atp -= 15; });
diseaseCards[9] = new Card("PEPCK Deficiency (Negative). Discard one enzyme card and lose 10 ATP points", function(p) { p.loseOneCard = true; p.atp -= 10; });

// Von Gierke's Disease (I)
diseaseCards[10] = new Card("Von Gierke's Disease (Positive). Gain 25 ATP points and draw another special card", function(p) { p.atp += 25; landspecialstation(p); });
diseaseCards[11] = new Card("Von Gierke's Disease (Negative). Lose two enzyme stations", function(p) { p.loseTwoStations = true; });

// Diabetes Mellitus Type II
diseaseCards[12] = new Card("Diabetes Mellitus Type II (Positive). Choose any enzyme station to move to and apply the good outcome, regardless of the cofactor", function(p) { p.chooseStation = true; });
diseaseCards[13] = new Card("Diabetes Mellitus Type II (Negative). Pay ATP rent for your own enzymes in the current turn", function(p) { p.payOwnRent = true; });

// Mutation
diseaseCards[14] = new Card("Mutation (Positive). Combine two enzyme cards to create a metabolic pathway, doubling the ATP points gained from both for the next three turns", function(p) { p.combineCards = true; p.doublePathwayATP = 3; });
diseaseCards[15] = new Card("Mutation (Negative). Reverse the effect of your last turn", function(p) { p.reverseLastEffect(); });

// Hyper-ammonemia
diseaseCards[16] = new Card("Hyper-ammonemia (Positive). Instantly gain 20 ATP points", function(p) { p.atp += 20; });
diseaseCards[17] = new Card("Hyper-ammonemia (Negative). Lose 15 ATP points instantly", function(p) { p.atp -= 15; });

// Andersen's Disease (IV)
diseaseCards[18] = new Card("Andersen's Disease (Positive). Gain 25 ATP points and draw another special card", function(p) { p.atp += 25; drawSpecialCard(); });
diseaseCards[19] = new Card("Andersen's Disease (Negative). Go to Enzyme Inhibition Zone", function(p) { gotojail(p); });
