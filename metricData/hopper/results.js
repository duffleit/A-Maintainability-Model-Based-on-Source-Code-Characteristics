var cc = 0.3, cbo = 0.41, dms = 0.9, rc = 0.5, lcom = 0.3, dit = 0.13, noc = 0.35, us = 0.3, cbb = 0.72, cbs = 0.035, atc = 1, cpd = 0.33;

var sensorPorts = [
    ["complexity", "module", [{name: "Cyclomatic Complexity (CC)", rating: cc},{name: "Depth of Inheritance Tree (DIT)", rating: dit},{name: "Number of Children (NOC)", rating: noc}]],
    ["coupling", "module", [{name: "Coupling Between Object Classes (CBO)", rating: cbo}]],
    ["coupling", "component", [{name: "Distance from Main Sequence (DMS)", image: "nancy/dms.png", link: "nancy/dms.png", description: "Distance from Main Sequence visualized by NDepend. Graph shows all Assemblies according to their Abstractness and Instability.", rating: dms}]],
    ["cohesion", "module", [{name: "Relational Cohesion (RC)", rating: rc}]],
    ["cohesion", "component", [{name: "Lack of Cohesion of Methods (LCOM)", rating: lcom}]],
    ["size", "module", [{name: "Codebase Balance (CBB)", rating: cbb}]],
    ["size", "unit", [{name: "Unit Size (US)", rating: us}]],
    ["size", "codebase", [{name: "Codebase Size (CBS)", rating: cbs}]],
    ["coverage", "codebase", [{name: "Automated Test Coverage (ATC)", rating: atc}]],
    ["duplication", "codebase", [{name: "Copy Paste Detection (CPD)", rating: cpd}]]
];
