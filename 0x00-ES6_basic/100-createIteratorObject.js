export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentIndex = 0;
  let currentDepartmentIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      if (currentIndex >= currentDepartment.length) {
        currentIndex += 1;
        currentDepartmentIndex += 1;
        return this.next();
      }

      const employee = currentDepartment[currentIndex];
      currentIndex += 1;
      return { value: employee, done: false };
    },
  };
}
