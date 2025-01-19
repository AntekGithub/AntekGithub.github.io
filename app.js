//      const input = document.querySelector("#id");
//      let variable = input.value || default;

function calculate(){
    //Get values
        //Base stats
        const inputAttacks1 = document.querySelector("#attacks1");
        let attacks1 = parseFloat(inputAttacks1.value) || 2;        //here (and in damage1) parsefloat is needed or maxDamage formula will explode
        const inputAttacksD3 = document.querySelector("#attacksD3");
        let attacksD3 = parseFloat(inputAttacksD3.value) || 0;                  //but somehow here (and in other inputs) it doesn't. 
        const inputAttacksD6 = document.querySelector("#attacksD6");//just to be safe parsefloat is now present in every number input
        let attacksD6 = parseFloat(inputAttacksD6.value) || 0;

        const inputSkill = document.querySelector("#skill");
        let skill = parseFloat(inputSkill.value) || 4;

        const inputStrength = document.querySelector("#strength");
        let strength = parseFloat(inputStrength.value) || 9;

        const inputAP = document.querySelector("#AP");
        let AP = parseFloat(inputAP.value) || 4;

        const inputDamage1 = document.querySelector("#damage1");
        let damage1 = parseFloat(inputDamage1.value) || 0;
        const inputDamageD3 = document.querySelector("#damageD3");
        let damageD3 = parseFloat(inputDamageD3.value) || 0;
        const inputDamageD6 = document.querySelector("#damageD6");
        let damageD6 = parseFloat(inputDamageD6.value) || 1;

        //Modifiers
        const inputSusHits = document.querySelector("#sustainedHits");
        let susHits = inputSusHits.value || 0;

        const inputRerollHitsOf1 = document.querySelector('#rerollHitsOf1');
        const rerollHitsOf1 = inputRerollHitsOf1.checked;
        const inputRerollHits = document.querySelector('#rerollHits');
        let rerollHits = inputRerollHits.checked;

        const inputRerollWoundsOf1 = document.querySelector('#rerollWoundsOf1');
        const RerollWoundsOf1 = inputRerollWoundsOf1.checked;
        const inputRerollWounds = document.querySelector('#rerollWounds');
        let RerollWounds = inputRerollWounds.checked;
        //Target

        const inputHalveDamage = document.querySelector('#halveDamage');
        const halveDamage = inputHalveDamage.checked;

    //Calculate


    //Calculate maximum damage

    let maxDamage = (attacks1 + (attacksD3 * 3) + (attacksD6 * 6)) * (damage1 + (damageD3 * 3) + (damageD6 * 6));
    if(halveDamage){
        if(maxDamage%2==1){
            maxDamage--;
            maxDamage/=2;
            maxDamage++;
        }else{
            maxDamage/=2;
        }
    }
    document.querySelector('#maximumDamage').textContent = 'maximum damage: ' + maxDamage;
    //Output
}