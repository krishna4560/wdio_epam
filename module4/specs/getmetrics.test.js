describe('open google page',async() => {
    /*beforeSession(() => {
        dns.setDefaultResultOrder('ipv4first');
    }),*/
    before(()=>{
        console.log("before log")
        browser.enablePerformanceAudits()
    });
    it('search wdio on google',async()=> {
        await browser.url("https://the-internet.herokuapp.com/login");
        let metrics = await browser.getMetrics();
        await $("//input[@title='Search']").setValue("wdio");
        console.log(metrics);
    })
    after(()=>{
        browser.disablePerformanceAudits()
    });
    

})