function getAllEntry() {
    var entry = {}
    for (var key in config) {
        entry = Object.assign(entry, {
            [key]: config[key].page
        })
    }
    console.log(entry)
    return entry
}

const config = {
    'feedback/index': { page: './src/main', title: "用户反馈" },
};

const defaultTitle = '用户反馈';

const openUrl = "http://localhost:8080/#/";

const allEntry = getAllEntry();

module.exports = { config, allEntry, openUrl, defaultTitle}