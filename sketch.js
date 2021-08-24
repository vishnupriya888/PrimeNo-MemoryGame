var map, map_img, r_ing, b_img;
var gameState = "noshow";
var temp = 0;
var red, blue;
var col = "";
var totalBlue = 0,
  totalRed = 0;
var win = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
function preload() {
  card_img = loadImage("images/card2.png");
  img1 = loadImage("images/10.png");
  img2 = loadImage("images/11.png");
  img3 = loadImage("images/12.png");
  img4 = loadImage("images/13.png");
  img5 = loadImage("images/14.png");
  img6 = loadImage("images/15.png");
  img7 = loadImage("images/16.png");
  img8 = loadImage("images/17.png");
  img9 = loadImage("images/18.png");
  img10 = loadImage("images/19.png");
  img11 = loadImage("images/20.png");
  img12 = loadImage("images/21.png");
  img13 = loadImage("images/22.png");
  img14 = loadImage("images/23.png");
  img15 = loadImage("images/24.png");
  img16 = loadImage("images/25.png");
  img17 = loadImage("images/26.png");
  img18 = loadImage("images/27.png");
  img19 = loadImage("images/28.png");
  img20 = loadImage("images/29.png");
  img21 = loadImage("images/30.png");
  img22 = loadImage("images/31.png");
  img23 = loadImage("images/32.png");
  img24 = loadImage("images/33.png");
  img25 = loadImage("images/34.png");
}
function setup() {
  createCanvas(620, 620);

  a1 = createSprite(70, 70, 100, 100);
  b1 = createSprite(190, 70, 100, 100);
  c1 = createSprite(310, 70, 100, 100);
  d1 = createSprite(430, 70, 100, 100);
  e1 = createSprite(550, 70, 100, 100);

  a2 = createSprite(70, 190, 100, 100);
  b2 = createSprite(190, 190, 100, 100);
  c2 = createSprite(310, 190, 100, 100);
  d2 = createSprite(430, 190, 100, 100);
  e2 = createSprite(550, 190, 100, 100);

  a3 = createSprite(70, 310, 100, 100);
  b3 = createSprite(190, 310, 100, 100);
  c3 = createSprite(310, 310, 100, 100);
  d3 = createSprite(430, 310, 100, 100);
  e3 = createSprite(550, 310, 100, 100);

  a4 = createSprite(70, 430, 100, 100);
  b4 = createSprite(190, 430, 100, 100);
  c4 = createSprite(310, 430, 100, 100);
  d4 = createSprite(430, 430, 100, 100);
  e4 = createSprite(550, 430, 100, 100);

  a5 = createSprite(70, 550, 100, 100);
  b5 = createSprite(190, 550, 100, 100);
  c5 = createSprite(310, 550, 100, 100);
  d5 = createSprite(430, 550, 100, 100);
  e5 = createSprite(550, 550, 100, 100);

  a1.addImage("cards", card_img);
  a2.addImage("cards", card_img);
  a3.addImage("cards", card_img);
  a4.addImage("cards", card_img);
  a5.addImage("cards", card_img);

  b1.addImage("cards", card_img);
  b2.addImage("cards", card_img);
  b3.addImage("cards", card_img);
  b4.addImage("cards", card_img);
  b5.addImage("cards", card_img);

  c1.addImage("cards", card_img);
  c2.addImage("cards", card_img);
  c3.addImage("cards", card_img);
  c4.addImage("cards", card_img);
  c5.addImage("cards", card_img);

  d1.addImage("cards", card_img);
  d2.addImage("cards", card_img);
  d3.addImage("cards", card_img);
  d4.addImage("cards", card_img);
  d5.addImage("cards", card_img);

  e1.addImage("cards", card_img);
  e2.addImage("cards", card_img);
  e3.addImage("cards", card_img);
  e4.addImage("cards", card_img);
  e5.addImage("cards", card_img);

  a1.addImage("card1", img1);
  a2.addImage("card6", img6);
  a3.addImage("card11", img11);
  a4.addImage("card16", img16);
  a5.addImage("card21", img21);

  b1.addImage("card2", img2);
  b2.addImage("card7", img7);
  b3.addImage("card12", img12);
  b4.addImage("card17", img17);
  b5.addImage("card22", img22);

  c1.addImage("card3", img3);
  c2.addImage("card8", img8);
  c3.addImage("card13", img13);
  c4.addImage("card18", img18);
  c5.addImage("card23", img23);

  d1.addImage("card4", img4);
  d2.addImage("card9", img9);
  d3.addImage("card14", img14);
  d4.addImage("card19", img19);
  d5.addImage("card24", img24);

  e1.addImage("card5", img5);
  e2.addImage("card10", img10);
  e3.addImage("card15", img15);
  e4.addImage("card20", img20);
  e5.addImage("card25", img25);
}
function draw() {
  background("white");
  drawSprites();
  rectMode(CENTER);
  text(World.mouseX + "," + World.mouseY, World.mouseX, World.mouseY);

  if (mousePressedOver(a1)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(b1)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(c1)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("card3", img3);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }

  if (mousePressedOver(d1)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("card4", img4);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(e1)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("card5", img5);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(a2)) {
    a1.changeImage("card1", img1);
    a2.changeImage("card6", img6);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("card3", img3);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(b2)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("card7", img7);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(c2)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("card8", img8);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("card4", img4);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(d2)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("card3", img3);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("card9", img9);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(e2)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("card5", img5);
    e2.changeImage("card10", img10);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(a3)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("card11", img11);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(b3)) {
    a1.changeImage("card1", img1);
    a2.changeImage("card6", img6);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("card12", img12);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("card3", img3);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("card4", img4);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(c3)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("card13", img13);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(d3)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("card7", img7);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("card14", img14);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(e3)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("card3", img3);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("card5", img5);
    e2.changeImage("cards", card_img);
    e3.changeImage("card15", img15);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(a4)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("card16", img16);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("card8", img8);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("card4", img4);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(b4)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("card17", img17);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(c4)) {
    a1.changeImage("card1", img1);
    a2.changeImage("card6", img6);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("card3", img3);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("card18", img18);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("card9", img9);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(d4)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("card19", img19);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(e4)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("card4", img4);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("card5", img5);
    e2.changeImage("card10", img10);
    e3.changeImage("cards", card_img);
    e4.changeImage("card20", img20);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(a5)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("card21", img21);

    b1.changeImage("cards", card_img);
    b2.changeImage("card7", img7);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("card3", img3);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(b5)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("card11", img11);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("card22", img22);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(c5)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("card23", img23);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(d5)) {
    a1.changeImage("card1", img1);
    a2.changeImage("card6", img6);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("card2", img2);
    b2.changeImage("cards", card_img);
    b3.changeImage("card12", img12);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("card3", img3);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("card4", img4);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("card24", img24);

    e1.changeImage("cards", card_img);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("cards", card_img);
  }
  if (mousePressedOver(e5)) {
    a1.changeImage("card1", img1);
    a2.changeImage("cards", card_img);
    a3.changeImage("cards", card_img);
    a4.changeImage("cards", card_img);
    a5.changeImage("cards", card_img);

    b1.changeImage("cards", card_img);
    b2.changeImage("cards", card_img);
    b3.changeImage("cards", card_img);
    b4.changeImage("cards", card_img);
    b5.changeImage("cards", card_img);

    c1.changeImage("cards", card_img);
    c2.changeImage("cards", card_img);
    c3.changeImage("cards", card_img);
    c4.changeImage("cards", card_img);
    c5.changeImage("cards", card_img);

    d1.changeImage("cards", card_img);
    d2.changeImage("cards", card_img);
    d3.changeImage("cards", card_img);
    d4.changeImage("cards", card_img);
    d5.changeImage("cards", card_img);

    e1.changeImage("card5", img5);
    e2.changeImage("cards", card_img);
    e3.changeImage("cards", card_img);
    e4.changeImage("cards", card_img);
    e5.changeImage("card25", img25);
  }
}
