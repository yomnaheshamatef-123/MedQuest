function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, image) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.landcount = 0;
	this.image = image || "";
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}


function corrections() {
	document.getElementById("cell1name").textContent = "α-KG complex";
}


function luxurytax() {
	addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Luxury Tax. Pay $100.");
}


var square = [];

square[0] = new Square("START", "COLLECT ATP 200 SALARY AS YOU PASS.", "#e06265", "images/start.png", 0, 2, 0);
square[1] = new Square("α-KG complex", "75 ATP", "#00bf63", 75, 9, 25, 25, 50);
square[2] = new Square("Special Station", "Draw a special card!", "#5643b6", 0, 2, 0);
square[3] = new Square("Citrate synthase", "75 ATP", "#00bf63", 75, 9, 25,25, 50);
square[4] = new Square("Special Station", "Draw a special card!", "#5643b6", 0, 2, 0);
square[5] = new Square("RNA polymerase", "30 ATP", "#792a18", 30, 10, 10, 10);
square[6] = new Square("Special Station", "Draw a special card!", "#5643b6", 0, 2, 0);
square[7] = new Square("Billverdin reductase", "75 ATP", "#c28ba0", 75, 11, 25, 25);
square[8] = new Square("Acyl CoA dehydrogenase", "45 ATP", "#b495f1", 45, 10, 15, 15, 106);
square[9] = new Square("HSL", "45 ATP", "#b495f1", 45, 10, 15, 15, 106);
square[10] = new Square("Enzyme Inhibition Zone", "YOU ARE IN THE ENZYME INHIBITION ZONE", "#fec36a", 0, 2, 0 );
square[11] = new Square("G6P", "60 ATP", "#72b0ff", 60, 3, 20, 20, 40, 60);
square[12] = new Square("PEPCK", "60 ATP", "#72b0ff", 60, 3, 20, 20, 40, 60);
square[13] = new Square("Pyruvate carboxylase", "60 ATP", "#72b0ff", 60, 3, 20, 20, 40, 60);
square[14] = new Square("Telomerase", "60 ATP", "#ce8e72", 60, 12, 20, 20);
square[15] = new Square("guanylyl transferase", "30 ATP", "#FFA500", 30, 8, 10, 10);
square[16] = new Square("Methyl transferase", "30 ATP", "#FFA500", 30, 8, 10, 10);
square[17] = new Square("Free Oxidation Station", "", "#e06265", 0, 2, 0);
square[18] = new Square("Glycogen phosph-orylase", "60 ATP", "#efc131", 60, 4, 18, 18, 20);
square[19] = new Square("Glycogen synthase", "60 ATP", "#efc131", 60, 4, 10, 10, 20);
square[20] = new Square("Phospho-glycerate kinase", "60 ATP", "#5e8993", 60, 5, 20, 20, 40, 70);
square[21] = new Square("Pyruvate kinase", "60 ATP", "#5e8993", 60, 5, 20, 20,40, 70);
square[22] = new Square("Hexo-kinase", "60 ATP", "#5e8993", 60, 5, 20, 20, 40, 70);
square[23] = new Square("Special Station", "Draw a special card!", "#5643b6", 0, 2, 0);
square[24] = new Square("Dna polymerase alpha  (primase) ", "110 ATP", "#f8c7b3", 110, 6, 35, 35);
square[25] = new Square("Dna polymerase beta (repair)", "30 ATP", "#f8c7b3", 30, 6, 10, 10);
square[26] = new Square("Dna polymerase gamma (mitochondrial)", "300 ATP", "#5643b6", 300, 6, 100, 100);
square[27] = new Square("Metabolic Pause", "You can call an auction if you want", "#fec36a", 0, 2, 0, 0);
square[28] = new Square("Dna polymerase delta (lagging)", "100 ATP", "#008000", 100, 6, 35, 35);
square[29] = new Square("Dna polymerase epsilon (leading)", "30 ATP", "#008000", 30, 6, 10, 10);
square[30] = new Square("CPS 1 & Ornithine trans-carbamylase", "60 ATP", "#ee2b7a", 60, 7, 10, 10);
square[31] = new Square("Arginino-succinate synthase & Arginase", "30 ATP", "#ee2b7a", 30, 7, 10, 10);
square[32] = new Square("Acetyl CoA carboxylase (ACC)", "180 ATP", "#b495f1", 180, 13, 60, 60);
square[33] = new Square("Pyruvate dehydro-genase", "105 ATP", "#f79326", 105, 14, 10, 10);

// Enzyme Cofactor Cards
var enzymeCards = [];

enzymeCards[0] = new Card("CoASH.<br><br>Skip the next rent", function(player) { player.skipNextRent = true; updateBoardUI(); });
enzymeCards[1] = new Card("CoASH.<br><br>Lose one of your properties", function(player) { loseOneProperty(player); updateBoardUI();});

enzymeCards[2] = new Card("ADP.<br><br>Move forward 2 spaces", function(player) { movePlayerForward(player, 2); updateBoardUI(); });
enzymeCards[3] = new Card("ADP.<br><br>Move back 2 spaces", function(player) { movePlayerBack(player, 2); updateBoardUI(); });

enzymeCards[4] = new Card("Mg2+.<br><br>Move forward 1 space", function(player) { movePlayerForward(player, 1); updateBoardUI();});
enzymeCards[5] = new Card("Mg2+.<br><br>Move back 1 space", function(player) { movePlayerBack(player, 1); updateBoardUI();});

enzymeCards[6] = new Card("Biotin.<br><br>Roll the dice again", function(player) { rollDiceAgain(player, 1); updateBoardUI(); });
enzymeCards[7] = new Card("Biotin.<br><br>Freeze for the next 2 turns", function(player) { player.freezeTurns = 2; updateBoardUI();});

enzymeCards[8] = new Card("GTP.<br><br>Double your rent for 1 round", function(player) { player.doubleNextRent = true; updateBoardUI(); });
enzymeCards[9] = new Card("GTP.<br><br>Lose 20 ATP points", function(player) { player.atp -= 20; updateATP(player); updateBoardUI(); });

enzymeCards[10] = new Card("CO2.<br><br>Skip the next rent", function(player) { player.skipNextRent = true; updateBoardUI();});
enzymeCards[11] = new Card("CO2.<br><br>Move back 4 spaces", function(player) { movePlayerBack(player, 4); updateBoardUI(); });

enzymeCards[12] = new Card("cAMP.<br><br>Gain 20 ATP points", function(player) { player.atp += 20; updateATP(player); updateBoardUI(); });
enzymeCards[13] = new Card("cAMP.<br><br>Go to Enzyme Inhibition Zone", function(player) { sendToInhibitionZone(player); updateBoardUI(); });

enzymeCards[14] = new Card("FAD.<br><br>Move forward 4 spaces", function(player) { movePlayerForward(player, 4); updateBoardUI();});
enzymeCards[15] = new Card("FAD.<br><br>Freeze for the next turn", function(player) { player.freezeTurns = 1; updateBoardUI();});

enzymeCards[16] = new Card("UDP Glucose.<br><br>Roll the dice again", function(player) { rollDiceAgain(player, 1); updateBoardUI();});
enzymeCards[17] = new Card("UDP Glucose.<br><br>Go to Enzyme Inhibition Zone", function(player) { sendToInhibitionZone(player); updateBoardUI();});

enzymeCards[18] = new Card("Pi.<br><br>Draw an additional card", function(p) { drawEnzymeCard(p, cardIndex); updateBoardUI(); });
enzymeCards[19] = new Card("Pi.<br><br>Lose 5 ATP points", function(player) { player.atp -= 5; updateATP(player); updateBoardUI(); });

enzymeCards[20] = new Card("NAD+.<br><br>Collect 10 ATP from each player", function(player) { collectFromEachPlayer(player, 10); updateBoardUI();});
enzymeCards[21] = new Card("NAD+.<br><br>Pay 15 ATP to the previous player", function(player) { payToPreviousPlayer(player, 15); updateBoardUI(); });

enzymeCards[22] = new Card("PARP-1.<br><br>Draw 2 cards on your next enzyme station", function(player) { player.drawTwoNextStation = true; updateBoardUI(); });
enzymeCards[23] = new Card("PARP-1.<br><br>Pay 15 ATP to the next player", function(player) { payToNextPlayer(player, 15); updateBoardUI();});

enzymeCards[24] = new Card("TPP.<br><br>Gain 10 ATP points", function(player) { player.atp += 10; updateATP(player); updateBoardUI();});
enzymeCards[25] = new Card("TPP.<br><br>Can't buy your next enzyme station", function(p) { drawEnzymeCard(p, cardIndex); updateBoardUI();});

enzymeCards[26] = new Card("NADPH.<br><br>Collect 10 ATP from each player", function(player) { collectFromEachPlayer(player, 10); updateBoardUI();});
enzymeCards[27] = new Card("NADPH.<br><br>Lose 10 ATP points", function(player) { player.atp -= 10; updateATP(player); updateBoardUI();});

enzymeCards[28] = new Card("Transcription factors.<br><br>Draw an additional card", function(p) { drawEnzymeCard(p, cardIndex); updateBoardUI(); });
enzymeCards[29] = new Card("Transcription factors.<br><br>Freeze for the next 2 turns", function(player) { player.freezeTurns = 2; updateBoardUI();});

enzymeCards[30] = new Card("Ca2+.<br><br>Draw two cards on your next enzyme station", function(player) { player.drawTwoNextStation = true; updateBoardUI();});
enzymeCards[31] = new Card("Ca2+.<br><br>Don't receive ATP the next round", function(player) { player.skipNextATP = true; updateBoardUI();});

enzymeCards[32] = new Card("Lipoic acid.<br><br>Collect rent of your current station from each player", function(player) { collectStationRentFromEachPlayer(player); updateBoardUI();});
enzymeCards[33] = new Card("Lipoic acid.<br><br>Move back 1 space", function(player) { movePlayerBack(player, 1); updateBoardUI();});

enzymeCards[34] = new Card("SAM.<br><br>Roll the dice again twice", function(player) { rollDiceAgain(player, 2); updateBoardUI();});
enzymeCards[35] = new Card("SAM.<br><br>Freeze for the next 3 turns", function(player) { player.freezeTurns = 3; updateBoardUI();});


// Special Cards
var specialCards = [];

specialCards[0] = new Card("Insulin Stimulation.<br><br>Gain 25 ATP points and draw another special card", function(p) { p.atp += 25; updateATP(p); drawSpecialCard(); });

specialCards[1] = new Card("Insulin Inhibition.<br><br>Miss your next turn and lose 15 ATP points", function(p) { p.missNextTurn = true; p.atp -= 15; updateATP(p);});

specialCards[2] = new Card("Glucagon Inhibition.<br><br>Reverse the effect of your last turn", function(p) { p.reverseLastEffect(player); });

specialCards[3] = new Card("Glucagon Stimulation.<br><br>Combine two enzyme stations to create a metabolic pathway, doubling the ATP points gained from both for the next three turns", function(p) { p.combineStations = true; p.doublePathwayATP = 3; });

specialCards[4] = new Card("Increased Metabolic Rate.<br><br>For your next 3 turns, double the ATP rent earned from all enzyme stations", function(p) { p.doubleRentTurns = 3; });

specialCards[5] = new Card("Feedback Inhibition.<br><br>Lose the ability to draw enzyme cards for the next 2 turns", function(p) { p.noDrawTurns = 2; });

specialCards[6] = new Card("Epinephrine Stimulation.<br><br>Instantly gain 10 ATP points", function(p) { p.atp += 10; updateATP(p);});

specialCards[7] = new Card("Epinephrine Inhibition.<br><br>Lose 15 ATP points instantly", function(p) { p.atp -= 15; updateATP(p);});

specialCards[8] = new Card("Lactic Acidosis.<br><br>Lose two enzyme stations", function(p) {p.loseTwoStations = true; });



// Disease Cards
var diseaseCards = [];

// Ketosis
diseaseCards[0] = new Card("Ketosis (Positive). Store 20 ATP points that cannot be lost due to penalties for the next three turns", function(player) { p.storedATP = 20; p.storedATPturns = 3; });
diseaseCards[1] = new Card("Ketosis (Negative). Lose the ability to draw enzyme cards for the next 2 turns", function(player) { p.noDrawTurns = 2; });

// Jaundice
diseaseCards[2] = new Card("Jaundice (Positive). Instantly gain 50 ATP points", function(player) { p.atp += 50; });
diseaseCards[3] = new Card("Jaundice (Negative). Go to Enzyme Inhibition Zone", function(player) { gotojail(player); });

// Pyruvate Kinase Deficiency
diseaseCards[4] = new Card("Pyruvate Kinase Deficiency (Positive). For the next 3 turns, halve any ATP points gained from enzyme stations", function(player) { p.halfRentTurns = 3; });
diseaseCards[5] = new Card("Pyruvate Kinase Deficiency (Negative). For your next 3 turns, double the ATP rent earned from all enzyme stations", function(player) { p.doubleRentTurns = 3; });

// Pyruvate Carboxylase Deficiency
diseaseCards[6] = new Card("Pyruvate Carboxylase Deficiency (Positive). Discard one enzyme card and lose 10 ATP points", function(player) { p.loseOneCard = true; p.atp -= 10; });
diseaseCards[7] = new Card("Pyruvate Carboxylase Deficiency (Negative). Pay ATP rent for your own enzymes in the current turn", function(player) { p.payOwnRent = true; });

// PEPCK Deficiency
diseaseCards[8] = new Card("PEPCK Deficiency (Positive). Miss your next turn and lose 15 ATP points", function(player) { p.missNextTurn = true; p.atp -= 15; });
diseaseCards[9] = new Card("PEPCK Deficiency (Negative). Discard one enzyme card and lose 10 ATP points", function(player) { p.loseOneCard = true; p.atp -= 10; });

// Von Gierke's Disease (I)
diseaseCards[10] = new Card("Von Gierke's Disease (Positive). Gain 25 ATP points and draw another special card", function(player) { p.atp += 25; landspecialstation(player); });
diseaseCards[11] = new Card("Von Gierke's Disease (Negative). Lose two enzyme stations", function(player) { p.loseTwoStations = true; });

// Diabetes Mellitus Type II
diseaseCards[12] = new Card("Diabetes Mellitus Type II (Positive). Choose any enzyme station to move to and apply the good outcome, regardless of the cofactor", function(player) { p.chooseStation = true; });
diseaseCards[13] = new Card("Diabetes Mellitus Type II (Negative). Pay ATP rent for your own enzymes in the current turn", function(player) { p.payOwnRent = true; });

// Mutation
diseaseCards[14] = new Card("Mutation (Positive). Combine two enzyme cards to create a metabolic pathway, doubling the ATP points gained from both for the next three turns", function(player) { p.combineCards = true; p.doublePathwayATP = 3; });
diseaseCards[15] = new Card("Mutation (Negative). Reverse the effect of your last turn", function(player) { p.reverseLastEffect(); });

// Hyper-ammonemia
diseaseCards[16] = new Card("Hyper-ammonemia (Positive). Instantly gain 20 ATP points", function(player) { p.atp += 20; });
diseaseCards[17] = new Card("Hyper-ammonemia (Negative). Lose 15 ATP points instantly", function(player) { p.atp -= 15; });

// Andersen's Disease (IV)
diseaseCards[18] = new Card("Andersen's Disease (Positive). Gain 25 ATP points and draw another special card", function(player) { p.atp += 25; drawSpecialCard(); });
diseaseCards[19] = new Card("Andersen's Disease (Negative). Go to Enzyme Inhibition Zone", function(player) { gotojail(player); });
