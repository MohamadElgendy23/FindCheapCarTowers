Find Cheap Car Towers

Introduction
Welcome to Find Cheap Car Towers; a project that helps me or other users find cheap car towers in the area to help me/them get their car towed during difficult situations or if the car is going through lots of damages. This project stems from when my car was in my apartment parking garage for a couple weeks straight and I couldn't get it out due to the front bumper damages. I had to call any car tower near me with good reviews but I had to also spend 400$ on this tow in comparison to 100$ or less with other towers if I had just spent more time finding them. The development of this project is in response to the issue I had, and I believe it can help others dramatically facing similar situations who just want to save money and get their cars moved to a safe area quickly.

Background
In December of 2024, I encountered a challenging yet funny experience with my Bitcoin wallet. Although initially stressful, this journey led to the development of a tool that I believe can be of immense help to others in similar situations. After creating a Bitcoin wallet and securing it with a passphrase inspired by the biblical book Genesis, I found myself in a predicament. My passphrase devised as a backward bible book name with a numerical prefix (e.g., "1senegig" turned into "SISENEG1" in uppercase), slipped from my memory after three months. This lapse made me unable to access my wallet containing approximately 0.24 BTC, valued at around $10,500 as of January 3, 2024.

The Resources I Had
My 24-word wallet recovery phrase.
The fingerprint of these 24 words.
Crucially, the fingerprint of the wallet incorporating both my 24 words and the forgotten passphrase.
The Solution
Determined to regain access to my funds, I embarked on a mission to reconstruct the forgotten passphrase. Using a combination of brute force methods, I developed a simple node project to explore numerous potential passphrases on top of a list of possible passphrases, each time pairing them with my 24-word recovery phrase. The goal was simple: to find a match with the recorded fingerprint.

Why I'm Sharing This
After extensive iterations, I rediscovered the correct passphrase, regaining access to my wallet and funds. My experience is not improbable. It highlights the critical importance of not only remembering your seed phrase but also documenting the master fingerprint of your wallet, both with and without the passphrase. This information was my saving grace.

By sharing the code I developed, I aim to offer a tool that could assist anyone facing similar challenges. Whether it's a forgotten passphrase or a complex wallet recovery scenario, this tool provides a practical fast first approach to resolving such issues.

A Word of Caution and Advice
Always remember to securely store your seed phrase and related recovery information. It's not just about creating a secure wallet; it's also about ensuring you can always access it. With this code, you would need to enter your 24-word seed phrase and your recorded fingerprint of your seed phrase with your forgotten passphrase, so please do not share the code with this critical and private information. Please keep this code private to just you and yourself!

Getting Started
These instructions will guide you in setting up the project on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have Node.js installed on your system. If you don't have Node.js installed, you can download and install it from the Node.js official website.

Installation
Clone the Repository
First, clone the repository to your local machine:

git clone https://github.com/josematute/Quick-Bitcoin-Passphrase-Recovery.git
cd bitcoin-fingerprints
Install Dependencies
Run the following command in the root directory of the project to install the necessary dependencies:

npm install
Running Tests
To run the predefined test suite, use the following command:

npm test
This will execute the tests defined in your project, verifying the core functionalities.

Configuration
Before using this code, you need to set up a few things:

Seed Phrase: This is your mnemonic seed phrase associated with your wallet.

Passphrases File: Create a text file containing a list of potential passphrases, each separated by a new line. This file will be read by the tool to test each passphrase against the seed phrase. There is already a passphrases.txt file in the root of the project for you. You can see what it should look like inside the test folder. For example, here is the passphrases-sample.txt file:

1siseneg
1Siseneg
1siseneG
1SiseneG
1siseneg!
1Siseneg!
1siseneG!
1SiseneG!
!1siseneg!
!1Siseneg!
!1siseneG!
!1SiseneG!
siseneg1
Siseneg1
siseneG1
SiseneG1
siseneg1!
Siseneg1!
siseneG1!
SiseneG1!
!siseneg1
!Siseneg1
!siseneG1
!SiseneG1
Expected Fingerprint: The fingerprint you expect to match when the correct passphrase is found.
Usage
To use the tool, you will need to provide your seed phrase, the potential seed phrase file path, and the expected fingerprint in the generateFingerprints.js file:

Modify the Example Usage Section
Edit the 'Example usage' section in the main script to include your specific details:

// Example usage
const seedPhrase = "{your seed phrase here}"
const passphrasesFile = "passphrases.txt" // File containing a list of passphrases, one per line; change if needed
const expectedFingerprint = "{your expected fingerprint here}" // Change if needed
Run the Script
After configuring the details, run the script:

node generateFingerprints.js
How to use this
This is how I would go about using this project. Let's say I have a 24-word seed phrase:

share spend art rug orphan member mixed pause raccoon rule cable inquiry volume cost symptom elephant violin door place avocado hazard eye brave broccoli

And I have the fingerprint of my wallet after adding my forgotten passphrase. Let's say 3df66e66. Then, in the passphrases.txt file, I would put, separated by new lines, as many passphrases as I can remember, with as many variations as possible, to generate as many possible passphrases as I can to finally get a match. Additionally, if you know how to code, you can edit the function logFingerprintForPassphrase in the file generateFingerprints.js so you can add permutations faster with code. A combination of these two strategies would be even better in my opinion. A successful print would look like this:

... other attempts

---

- - - Trying passphrase: !1siseneG! - - -
      Passphrase: !1siseneG! - Fingerprint: 658367a8
      Passphrase: !1siseneg! - Fingerprint: 7bd32554
      Passphrase: !1SISENEG! - Fingerprint: f8d8c644
      Passphrase: !Genesis1! - Fingerprint: 738595b4

---

- - - Trying passphrase: !1SiseneG! - - -
      Passphrase: !1SiseneG! - Fingerprint: 10f557aa
      Passphrase: !1siseneg! - Fingerprint: 7bd32554
      Passphrase: !1SISENEG! - Fingerprint: f8d8c644
      Passphrase: !GenesiS1! - Fingerprint: bbd98baf

---

- - - Trying passphrase: siseneg1 - - -
      Passphrase: siseneg1 - Fingerprint: a6c299f2
      Passphrase: siseneg1 - Fingerprint: a6c299f2
      Passphrase: SISENEG1 - Fingerprint: 3df66e66
      = = = = = MATCH FOUND = = = = =
      The passphrase that matches the expected fingerprint is: siseneg1
      Contributing
      Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
idk
