# Travel Tracker

## Overview
This application is a travel agency website where users can login and add/remove and reference their trips. There is additional business logic that allows for financial caluclations related to their trips. Included as well is a controlled form to request new trips. 

## Technologies
HTML, CSS, Javascript, Mocha, Chai, Lighthouse

## Preview 
<img width="1425" alt="Screen Shot 2023-04-23 at 2 41 16 PM" src="https://user-images.githubusercontent.com/36003417/233859163-907d2acd-3429-4c75-a2c0-4ba9637195bf.png">

## Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something (just add a line in the README) and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

## Setup
1. Clone [this api repo](https://github.com/ajh0050/travel-tracker-api) and follow the instructions in that readme to get the server up
2. Clone this repo
After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo.

3. nstall the library dependencies. Run:

```bash
npm install
```

4. To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` 

## How to interact with the app

To get past teh login page you use "traveler:id" for username so for the traveler with the of 8 the username will be "traveler8" and the password for every traveler is "travel"
