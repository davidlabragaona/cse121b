// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function shipCanFire() {
    if (shipHealth && shipAmmo)
        return true;
    return false;
}

function isHit() {
    let number = Math.random();
    if (number >= .5)
        return true;
    return false;
}

function reloadShip() {
  shipAmmo += 3;
  shipHealth--;
}

function isDestroyed(health) {
    if (health <= 0)
        return true;
    return false;
}