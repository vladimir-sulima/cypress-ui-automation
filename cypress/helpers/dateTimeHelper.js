module.exports = {
    getUniqueString: () =>{
        let currentDateTime = new Date();

        return {
            currentYear: currentDateTime.getFullYear(),
            currentMonths:  currentDateTime.getMonth(),
            currentDate: currentDateTime.getDate(),
            currentHours: currentDateTime.getHours(),
            currentMinute: currentDateTime.getMinutes(),
            currentSecond: currentDateTime.getSeconds(),

            userUniqueNumberAppender: `${currentDateTime.getFullYear().toString().substr(2, 2)}${currentDateTime.getMonth() + 1}${currentDateTime.getDate()}${currentDateTime.getHours()}${currentDateTime.getMinutes()}${currentDateTime.getSeconds()}`

        }
    }
}