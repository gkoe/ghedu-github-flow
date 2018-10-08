Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @Furtmueller Sign out
1
0 1 rstropek/GitHubEduWorkshop
 Code  Issues 2  Pull requests 0  Projects 0  Wiki  Insights
GitHubEduWorkshop/hands-on-labs/github-flow/step-2/index.js
a086844  23 hours ago
@rstropek rstropek Add hands-on lab
     
26 lines (21 sloc)  851 Bytes
const parameter1Input = document.getElementById('parameter1');
const parameter2Input = document.getElementById('parameter2');
const operationSelect = document.getElementById('operation');
const resultSpan = document.getElementById('result');
const resultArea = document.getElementById('result-area');
const errorArea = document.getElementById('error-area');

function calculate() {
    const p1 = parseInt(parameter1Input.value);
    const p2 = parseInt(parameter2Input.value);

    if (isNaN(p1) || isNaN(p2)) {
        errorArea.hidden = false;
        resultArea.hidden = true;
        return;
    } else {
        errorArea.hidden = true;
    }

    // ToDo: Call calculation logic. For now, we just assume the universal answer to everything ;-)
    let result = 42;

    resultSpan.innerText = result.toString();
    resultArea.hidden = false;
}
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.