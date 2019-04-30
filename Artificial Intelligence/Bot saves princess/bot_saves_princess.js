function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var grid = [];
    for (var i = 1; i <= dimension; ++i) {
        grid.push(lines[i]);
    }
    displayPathtoPrincess(dimension, grid);
}

function displayPathtoPrincess(dimension, grid) {
    // Your Code here
    var a = Date.now();
    var m = [-1, 0], p = [-1, 0];
    for (let i = 0; i < grid.length; i++) {
        const element = grid[i];
        m[0] = Math.max(m[0], element.indexOf('m'));
        p[0] = Math.max(p[0], element.indexOf('p'));
        if (m[0] != -1)
            m[1] = i;
        if (p[0] != -1)
            p[1] = i;
    }
    
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
