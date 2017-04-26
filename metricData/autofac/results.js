var cc = 0.1, cbo = 0.3, dms = 0.7, rc = 0.44, lcom = 0.3, dit = 0.18, noc = 0.18, us = 0.3, cbb = 0.37, cbs = 0.018, atc = 0.45, cpd = 0.12;

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
