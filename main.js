var convertedRank;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter CS2 ELO: ', (elo) => {
    console.log(`CS:GO Rank: ${convertELOtoRank(elo)}`);

    rl.close();
});

rl.on('close', () => {
    process.exit(0);
});

function convertELOtoRank(elo) {
    const rankThresholds = [0, 833, 834, 1666, 1667, 2500, 2501, 3333, 3334, 4166, 4167, 4999, 5000, 6250, 6251, 7500, 7501, 8750, 8751, 9999, 10000, 11250, 11251, 12500, 12501, 13750, 13751, 14999, 15000, 17500, 17501, 19999, 20000, 24999, 25000, 29999, 30000];
    if (elo < rankThresholds[2]) {
        convertedRank = "Silver 1";
    } else if (elo >= rankThresholds[2] && elo <= rankThresholds[3]) {
        convertedRank = "Silver 2";
    } else if (elo >= rankThresholds[4] && elo <= rankThresholds[5]) {
        convertedRank = "Silver 3";
    } else if (elo >= rankThresholds[6] && elo <= rankThresholds[7]) {
        convertedRank = "Silver 4";
    } else if (elo >= rankThresholds[8] && elo <= rankThresholds[9]) {
        convertedRank = "Silver Elite";
    } else if (elo >= rankThresholds[10] && elo <= rankThresholds[11]) {
        convertedRank = "Silver Elite Master";
    } else if (elo >= rankThresholds[12] && elo <= rankThresholds[13]) {
        convertedRank = "Gold Nova 1";
    } else if (elo >= rankThresholds[14] && elo <= rankThresholds[15]) {
        convertedRank = "Gold Nova 2";
    } else if (elo >= rankThresholds[16] && elo <= rankThresholds[17]) {
        convertedRank = "Gold Nova 3";
    } else if (elo >= rankThresholds[18] && elo <= rankThresholds[19]) {
        convertedRank = "Gold Nova 4";
    } else if (elo >= rankThresholds[20] && elo <= rankThresholds[21]) {
        convertedRank = "Master Guardian 1";
    } else if (elo >= rankThresholds[22] && elo <= rankThresholds[23]) {
        convertedRank = "Master Guardian 2";
    } else if (elo >= rankThresholds[24] && elo <= rankThresholds[25]) {
        convertedRank = "Master Guardian Elite";
    } else if (elo >= rankThresholds[26] && elo <= rankThresholds[27]) {
        convertedRank = "Distinguished Master Guardian";
    } else if (elo >= rankThresholds[28] && elo <= rankThresholds[29]) {
        convertedRank = "Legendary Eagle";
    } else if (elo >= rankThresholds[30] && elo <= rankThresholds[31]) {
        convertedRank = "Legendary Eagle Master";
    } else if (elo >= rankThresholds[32] && elo <= rankThresholds[33]) {
        convertedRank = "Supreme Master First Class";
    } else if (elo >= rankThresholds[34] && elo <= rankThresholds[35]) {
        convertedRank = "Global Elite";
    } else if (elo >= rankThresholds[36]) {
        convertedRank = "Amongst the Best in the World";
    }

    return convertedRank;
}
