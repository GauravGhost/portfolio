export function calculateExperience() {
    const startDate = new Date('2023-12-01'); // Start date: December 1, 2023
    const currentDate = new Date(); // Current date

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years, 
        months
    }
}