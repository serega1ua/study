describe('Common user scenario', () => {
    it('should redirect from / to /search and enter in inputbox "Pandas" then clicked on button then click on movie poster', async () => {
        await browser.url(`http://localhost:3000/`);
        await browser.elementClick('search-bar');
        await browser.executeAsync((done) => {
            setTimeout(done, 2000);
        });
        await $("#search-bar").setValue("Pandas");
        await browser.executeAsync((done) => {
            setTimeout(done, 2000);
        });
        $('#search-btn').click();
        await browser.executeAsync((done) => {
            setTimeout(done, 2000);
        });
        await browser.waitUntil(async () => {
            return (await browser.getUrl() === "http://localhost:3000/search/Pandas");
        }, {
            timeout: 6000
        });
        await browser.executeAsync((done) => {
            setTimeout(done, 2000);
        });
        await browser.waitUntil(async () => {
            return (await $('#searched-movie-Pandas').waitForClickable({timeout: 10000}));
        }, {
            timeout: 10000
        });
        await $('#searched-movie-Pandas').click();
        await browser.waitUntil(async () => {
            return (await $('#details').waitForDisplayed({timeout: 70000}))
        }, {
            timeout: 80000
        });
        await browser.executeAsync((done) => {
            setTimeout(done, 2000);
        });
    })
})

