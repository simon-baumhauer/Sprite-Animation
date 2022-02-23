const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png'
const spriteWidth = 575; // The Image  6876 pixes with 12 columns so, 6876 divided by 12 equals 573. I will add 575 do have some space for marign
const spriteHeight = 523; // The Image  5230 pixes height 12 columns so, 6876 divided by 10 equals 523. I will add 523 do have some space for marign
frameX = 0;
frameY = 0;
/**
 * This function sizes the Canvas, afterward it insertd the sprite sheet and cuts out one picture and places on a certain position
 * 
 */
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100, 50, 100, 100, );
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (frameX < 6) frameX++;
    else frameX = 0;
    requestAnimationFrame(animate);
};
animate();