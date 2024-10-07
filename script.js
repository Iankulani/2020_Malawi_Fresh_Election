function calculate() {
    // Get input values
    const totalPublishedCenters = parseInt(document.getElementById('totalPublishedCenters').value) || 0;
    const totalRegisteredVotes = parseInt(document.getElementById('totalRegisteredVotes').value) || 0;
    const totalVotesCast = parseInt(document.getElementById('totalVotesCast').value) || 0;
    const nullAndVoidVotes = parseInt(document.getElementById('nullAndVoidVotes').value) || 0;
    const totalValidVotes = parseInt(document.getElementById('totalValidVotes').value) || 0;
    const validVotesLazarus = parseInt(document.getElementById('validVotesLazarus').value) || 0;
    const validVotesPeter = parseInt(document.getElementById('validVotesPeter').value) || 0;
    const validVotesArthur = parseInt(document.getElementById('validVotesArthur').value) || 0;

    let result = '';

    // Determine the winner
    if (validVotesLazarus > totalValidVotes / 2) {
        result += "Congratulations Dr Lazarus Maccathy Chakwera, you're a winner of the 2020 election\n\n";
    } else if (validVotesPeter > totalValidVotes / 2) {
        result += "Congratulations Peter Kuwani, you're a winner of the 2020 election\n\n";
    } else if (validVotesArthur > totalValidVotes / 2) {
        result += "Congratulations Professor Arthur Peter Muthalika, you're a winner of the 2020 election\n\n";
    } else {
        result += "No majority winner was found. RUNOFF may be required\n";
    }

    // Calculating percentages
    const percentageVotesCast = (totalVotesCast / totalValidVotes) * 100;
    result += `Total Votes Cast in percentage = ${percentageVotesCast.toFixed(2)}%\n`;

    const percentageValidVotes = (totalValidVotes / totalVotesCast) * 100;
    result += `Total Valid Votes for all candidates in percentage = ${percentageValidVotes.toFixed(2)}%\n`;

    const percentageNullAndVoid = (nullAndVoidVotes / totalValidVotes) * 100;
    result += `Total Null & Void votes in percentage = ${percentageNullAndVoid.toFixed(2)}%\n`;

    const percentageRegisteredVoters = (totalVotesCast / totalRegisteredVotes) * 100;
    result += `Total Registered voters/turnout in percentage = ${percentageRegisteredVoters.toFixed(2)}%\n`;

    const percentageLazarus = (validVotesLazarus / totalValidVotes) * 100;
    result += `Total Valid Votes for Dr Lazarus Chakwera in percentage = ${percentageLazarus.toFixed(2)}%\n`;

    const percentagePeter = (validVotesPeter / totalValidVotes) * 100;
    result += `Total Valid Votes for Peter Kuwani in percentage = ${percentagePeter.toFixed(2)}%\n`;

    const percentageArthur = (validVotesArthur / totalValidVotes) * 100;
    result += `Total Valid Votes for Professor Muthalika in percentage = ${percentageArthur.toFixed(2)}%\n`;

    document.getElementById('results').textContent = result;
}
