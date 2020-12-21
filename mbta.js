// output "the total number of stops for the trip"! on the "MBTA".
// Subway lines Arrays of object:
const Subwaylines = {
    Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],

    Green: ["Government Center", "Park Street", "Boyston", "Arlington", "Copley", "Hynes", "Kenmore"],

    Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"],
}
// the funcion that: returns the total number of stops for the trip!
function stopsBetweenStations(StartLine, StartStation, EndLine, EndStation) {
    this.StartLine = StartLine;
    this.StartStation = StartStation;
    this.EndLine = EndLine;
    this.EndStation = EndStation;
    let totalStops = 0;
    //get the index of the startLine startStation.
    //get the index of the end station.
    let st = Subwaylines[StartStation].indexOf(StartLine) + 1;
    let en = Subwaylines[EndStation].indexOf(EndLine) + 1;
    // get the index of the startLine Park Street station.
    //get the index of the endLine Park Street station.

    // let SPSSR = Subwaylines["Park Street"].indexOf(StartLine) + 1;
    // let SPSSG = Subwaylines["Park Street"].indexOf(StartLine) + 1;
    // let SPSSO = Subwaylines["Park Street"].indexOf(StartLine) + 1;
    // let EPSSR = Subwaylines["Park Street"].indexOf(EndLine) + 1;
    // let EPSSG = Subwaylines["Park Street"].indexOf(EndLine) + 1;
    // let EPSSO = Subwaylines["Park Street"].indexOf(EndLine) + 1;

    //get the index of the startLine startStation
    //get the index of the end station
    if (StartStation === EndStation) {
        if (en > st) {
            totalStops = (en - st) - 1;
        } else if (st > en) {
            totalStops = (st - en) - 1;
        } else {
            totalStops = 0;
        }
    }
    else {
        switch (StartStation) {
            //RED
            case "Red":
                if (EndStation == "Green") {
                    totalStops = ((Subwaylines["Red"].length) - st) - 2;
                } else if (EndStation == "Orange") {
                    totalStops = ((en + Subwaylines["Red"].length + Subwaylines["Green"].length) - st) - 1;
                }
                break;
            //GREEN
            case "Green":
                if (EndStation == "Red") {
                    totalStops = ((st + Subwaylines["Red"].length) - en) - 1;
                } else if (EndStation == "Orange") {
                    totalStops = ((en + Subwaylines["Green"].length) - st) - 1;
                }
                break;
            //ORANGE
            case "Orange":
                if (EndStation == "Green") {
                    totalStops = ((st + Subwaylines["Green"].length) - en) - 1;
                } else if (EndStation == "Red") {
                    totalStops = ((st + Subwaylines["Green"].length + Subwaylines["Red"].length) - en) - 1;
                }
                break;
        }
    }
    //TOTAL
    return totalStops;
}
// objects 
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')
// 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')
// 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')
// 6 stops

