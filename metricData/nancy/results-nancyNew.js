var cc = 0.3, cbo = 0.19, dms = 0.5, rc = 0.62, lcom = 0.5, dit = 0.1, noc = 0.15, us = 0.3, cbb = 0.86, cbs = 0.07, atc = 0.79, cpd = 0.033;

var sensorPorts = [
    ["complexity", "module", [{name: "Cyclomatic Complexity (CC)", rating: cc},{name: "Depth of Inheritance Tree (DIT)", rating: dit},{name: "Number of Children (NOC)", rating: noc}]],
    ["coupling", "module", [{name: "Coupling Between Object Classes (CBO)", rating: cbo}]],
    ["coupling", "component", [{name: "Distance from Main Sequence (DMS)", image: "nancy/dms-nancyNew.png", link: "nancy/dms-nancyNew.png", description: "Distance from Main Sequence visualized by NDepend. Graph shows all Assemblies according to their Abstractness and Instability.", rating: dms}]],
    ["cohesion", "module", [{name: "Relational Cohesion (RC)", rating: rc}]],
    ["cohesion", "component", [{name: "Lack of Cohesion of Methods (LCOM)", rating: lcom}]],
    ["size", "module", [{name: "Codebase Balance (CBB)", rating: cbb}]],
    ["size", "unit", [{name: "Unit Size (US)", rating: us}]],
    ["size", "codebase", [{name: "Codebase Size (CBS)", rating: cbs}]],
    ["coverage", "codebase", [{name: "Automated Test Coverage (ATC)", rating: atc}]],
    ["duplication", "codebase", [{name: "Copy Paste Detection (CPD)", rating: cpd}]]
];
