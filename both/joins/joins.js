// Lawyers
Lawyers.join(Insurers, "insurerId", "insurer", ["name"]);

// Instructions
Instructions.join(Lawyers, "lawyerId", "lawyer", ["name"]);

// Valuers
Valuers.join(Insurers, "insurerId", "insurer", []);

// ValuerInstructions
ValuerInstructions.join(Valuers, "valuerId", "valuer", ["name"]);

// BranchFacilities
BranchFacilities.join(Branches, "branchId", "branch", []);

// Qs
Qs.join(Insurers, "insurerId", "insurer", []);

// QsInstructions
QsInstructions.join(Qs, "qsId", "qs", []);

