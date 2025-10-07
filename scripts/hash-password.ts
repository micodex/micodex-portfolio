import bcrypt from "bcrypt";

const password = process.argv[2]; //Grabs the third argument from the command line

if (!password) {
  console.error("Usage: npx tsx scripts/hash-password.ts your_password_here");
  process.exit(1); //immediately stops the program and signals that it exited with an error.
}

const salt = 10;

const hash = bcrypt.hashSync(password, salt);

console.log("hashed password", hash);
