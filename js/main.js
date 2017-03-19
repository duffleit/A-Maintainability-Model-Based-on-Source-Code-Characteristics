sensorPortFactory = function() {

    var characteristics = ["complexity", "coupling", "cohesion", "structure", "size", "coverage", "duplication"];
    var partitions = ["unit", "module", "component", "codebase"];

    var getCell = function(characteristic, partition) {
        var rowSkips = characteristics.length * partitions.indexOf(partition);
        var colSkips = characteristics.indexOf(characteristic);
        var skips = rowSkips + colSkips;

        return $('.sensor-port-rating').eq(skips);
    };

    var setAverage = function(cell, metrics){
        var average =
            Math.round((metrics.reduce(function(sum, port){return sum + port.rating}, 0) / metrics.length) * 1000) / 1000;

        cell.html(average);
        cell.css("backgroundColor", getRgb(average));
    };

    var setPorts = function(cell, metrics){

        var metricSummary = "";
        for(var i = 0; i < metrics.length; i++){
            var metric = metrics[i];
            console.log(metric);
            metricSummary += metric.name + ": " + metric.rating + "<br>";
        }
        cell.attr("data-tip", metricSummary);
        cell.tipr();
    };

    var getRgb = function(average){
        var i = 1 - parseFloat(average);
        i = i *100;
        i = Math.round(i * 1000) / 1000;
        var hue = i * 1.2 / 360;
        var rgb = hslToRgb(hue, 1, .35);
        return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    };

    var hslToRgb = function(h, s, l){
        var r, g, b;

        if(s == 0){
            r = g = b = l;
        }else{
            var hue2rgb = function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    return {
        setPort: function(port){
            var cell = getCell(port[0], port[1]);

            setAverage(cell, port[2]);
            setPorts(cell, port[2]);
        }
    }
}();

$('document').ready(function(){

    var sensorPorts = [
        ["complexity", "module", [{name: "Cyclomatic Complexity (CC)", rating: 0.1}]],
        ["coupling", "module", [{name: "Coupling Between Object Classes (CBO)", rating: 0.2}]],
        ["coupling", "component", [{name: "Distance from Main Sequence (DMS)", rating: 0.3}]],
        ["cohesion", "module", [{name: "Relational Cohesion (RC)", rating: 0.5}]],
        ["cohesion", "component", [{name: "Lack of Cohesion of Methods (LCOM)", rating: 0.2}]],
        ["structure", "module", [{name: "Depth of Inheritance Tree (DIT)", rating: 0.2}, {name: "Number of Children (NOC)", rating: 0.7}]],
        ["structure", "component", [{name: "Codebase Balance (CBB)", rating: 0.6}]],
        ["size", "unit", [{name: "Unit Size (US)", rating: 0.1}]],
        ["size", "codebase", [{name: "Codebase Size (CBS)", rating: 0.2}]],
        ["coverage", "codebase", [{name: "Automated Test Coverage (ATC)", rating: 0.4}]],
        ["duplication", "codebase", [{name: "Copy Paste Detection (CPD)", rating: 0.2}]]
    ];

    for(var i = 0; i < sensorPorts.length; i++){
        var sensorPort = sensorPorts[i];
        sensorPortFactory.setPort(sensorPort);
    }
});




