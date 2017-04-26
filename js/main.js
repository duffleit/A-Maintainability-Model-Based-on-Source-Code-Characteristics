var rgbCalculator = function(){

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
        calculateRgb: getRgb
    }
}();

sensorPortFactory = function() {

    var characteristics = ["cohesion", "coupling", "complexity", "size", "duplication", "coverage"];
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
        cell.css("backgroundColor", rgbCalculator.calculateRgb(average));
    };

    var setPorts = function(cell, metrics){

        var metricSummary = "";
        for(var i = 0; i < metrics.length; i++){
            var metric = metrics[i];

            metricSummary += "<div class='metricSummary'>";
            metricSummary += "<div class='name'>" + metric.name + ": " + metric.rating + "</div>";

            if(metric.description) metricSummary += "<div class='description'>" + metric.description + "</div>";
            if(metric.image) metricSummary += "<div class='image'><img src='metricData/" + metric.image+ "'></div>";
            if(metric.link) metricSummary += "<div class='link'><i class='fa fa-link'></i>&nbsp;<a target='_blank' href='metricData/" + metric.image + "'>more</a></div>";

            metricSummary += "</div>";
        }
        cell.attr("data-tip", metricSummary);
        cell.tipr();
    };

    return {
        setPort: function(port){
            var cell = getCell(port[0], port[1]);

            setAverage(cell, port[2]);
            setPorts(cell, port[2]);
        }
    }
}();

var matrixFactory = function(){

    var characteristicsLength = 7;
    var portionLength = 4;

    var qualityCharacteristicsMapping = [[1, 4], [0, 1, 5], [0, 1, 3, 4, 5], [2, 4, 5], [1, 2, 3, 5]];

    var sumPorts = function(){

        var characteristicValues = [];

        for(var i = 0; i < characteristicsLength; i++){

            var sum = 0;
            var usedPorts = 0;

            for(var f = 0; f < portionLength; f++){
                var port = $('.partition-row')[f];
                var partitionPort = $(port).find('.sensor-port-rating')[i];

                var portValue = parseFloat($(partitionPort).html());
                if(isNaN(portValue)) continue;

                sum += portValue;
                usedPorts++;
            }

            var average = sum/usedPorts;
            average = Math.round(average* 1000) / 1000;

            characteristicValues[i] = average;

            var resultCell = $('.characteristics-results').children()[i+1];
            $(resultCell).html((average).toFixed(2));
            $(resultCell).css("backgroundColor", rgbCalculator.calculateRgb(average));
        }

        return characteristicValues;
    };

    var calculateQualityResults = function(characteristicResults){
        for(var i = 0; i < qualityCharacteristicsMapping.length; i++){

            var mapping = qualityCharacteristicsMapping[i];

            var sum = 0;
            var characteristicsCount = 0;
            for(; characteristicsCount < mapping.length; characteristicsCount++){
                sum += characteristicResults[mapping[characteristicsCount]];
                var mappingCellCount = (1+mapping[characteristicsCount]);

                var mappingCell = $('.quality-characteristics:nth('+i+') .table-cell:nth('+mappingCellCount+')');
                $(mappingCell).html("X");
                $(mappingCell).css("backgroundColor", "#D2D7DF");
                $(mappingCell).css("textAlign", "center");
                $(mappingCell).css("fontWeight", "bold");

            }

            var result = sum/characteristicsCount;
            result = Math.round(result* 1000) / 1000;

            var resultCell = $('.quality-characteristics:nth('+i+') .result');

            $(resultCell).html(getRating(result));
            $(resultCell).css("backgroundColor", rgbCalculator.calculateRgb(result));

            $(resultCell).attr("data-tip", "Rating: " + result);
            $(resultCell).tipr();
        }
    };

    var getRating = function(number){
        if(number < 0.2) return "++";
        if(number < 0.4) return "+";
        if(number < 0.6) return "0";
        if(number < 0.8) return "-";
        return "--";
    };

    return {
        calculateMatrix: function(){
            var characteristicResults = sumPorts();
            calculateQualityResults(characteristicResults);
        }
    }

}();

var initializeModel = function(sensorPorts){

    $(".partition-row").hide();

    for(var i = 0; i < sensorPorts.length; i++){
        var sensorPort = sensorPorts[i];
        sensorPortFactory.setPort(sensorPort);
    }

    matrixFactory.calculateMatrix();
    $("#show-partitions-btn").click(function() { $(".partition-row").toggle();});
};



