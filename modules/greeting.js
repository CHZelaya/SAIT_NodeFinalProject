// * Function generates a randon number, and then picks an index in the greetings array based on that random number. 
// * It then returns that randomly selected greeting.

exports.chooseRandomGreeting = (video_game_greetings) => {
    video_game_greetings = [
        "It's-a me, Mario!",
        "Hello, is it me you're looking for?",
        "Welcome back, Commander!",
        "Hey! Listen!",
        "Greetings, traveler!",
        "What's up?",
        "Welcome to the world of Pokémon!",
        "Welcome, hero! The realm awaits your courage!",
        "Ah, a new challenger has arrived!",
        "Greetings, brave adventurer! Ready for your quest?",
        "Hey there! Ready to level up your game?",
        "Welcome back, champion! Your skills are needed!",
        "Hello, traveler! What tales do you bring from afar?",
        "Good to see you again! Time to save the world!",
        "Salutations! The next adventure is just around the corner!",
        "Prepare yourself for an epic journey!",
        "Welcome to the arena, fighter!",
        "The quest begins now, adventurer!",
        "Ah, the chosen one has arrived!",
        "Let the games begin!",
        "Your destiny awaits, hero!",
        "Time to embark on a new adventure!",
        "Prepare for battle, warrior!",
        "The journey begins here!",
        "Level up! New challenges await!",
        "Welcome to the digital realm!",
        "Let the adventure unfold!",
        "The fate of the world rests in your hands!",
        "Adventure calls! Will you answer?",
        "Get ready to explore new horizons!",
        "The stage is set for an epic showdown!",
        "A new quest awaits your discovery!",
        "Rise, hero! The time for action is now!",
        "The legend continues!",
        "Victory is just a challenge away!",
        "Unleash your inner hero!",
        "Prepare for an extraordinary adventure!",
        "The next chapter is about to begin!",
        "A new era of gaming awaits!",
        "The adventure is only beginning!",
        "Prepare to conquer new worlds!",
        "Your journey towards greatness starts now!"
    ];
    let randomNumber = Math.floor(Math.random() * 39) + 1;
    let greeting = video_game_greetings[randomNumber];
    return greeting
}
