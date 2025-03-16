(
    function () {

        module.exports = {
            setScheduler: setScheduler
        }

        const fs = require('fs');
        const path = require('path');

        function setScheduler(req, res, next) {
            const filePath = path.resolve(__dirname, './data/schedule.json');
            const scheduleObj = {
                date: new Date(),
                owner: 'system',
                item: req.body.userInput,
            }
            let currentFile = [];
            if (fs.existsSync(filePath)) {
                currentFile = JSON.parse(fs.readFileSync(filePath));
            }
            currentFile.push(scheduleObj);
            try {
                fs.writeFileSync(filePath, JSON.stringify(currentFile));
                req.response = 'Schedule saved succesfully';
                next();
            } catch (error) {
                res.status(500).json('Internal Server Error')
            }
        }
    }
)()