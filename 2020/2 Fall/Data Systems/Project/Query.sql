SELECT checkNo, workerSSN, lName, fName, mName, 
address1, address2, addressCity, addressZip, 
daysWorked, grossPay, taxesWithheld, netPay, 
ytDateGrossPay, ytDateTaxes, ytDateNetPay
FROM payroll, pworker
WHERE payroll.workerSSN = pworker.sSN;


SELECT lName, fName, mName, telephone, skillName, skillLevel , 
dateAvailable, rating, 



SELECT lname, fName, mName, telephone, pworker.skillName, pworker.skillLevel, jobNo, job.skillLevel, dateAvailable, rating
FROM job, pworker
WHERE (pworker.skillName = job.skillName)
ORDER BY lName ASC

