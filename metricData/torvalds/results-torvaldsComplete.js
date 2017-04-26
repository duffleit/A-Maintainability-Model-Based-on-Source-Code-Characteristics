var cc = 0.1, cbo = 0.47, dms = 0.1, rc = 0.26, lcom = 0.9, dit = 0.26, noc = 0.36, us = 0.3, cbb = 0.72, cbs = 0.16, atc = 0.79, cpd = 0.11;

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
