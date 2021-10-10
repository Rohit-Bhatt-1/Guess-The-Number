import ThemeFormat from "./ThemeFormat";


describe("ThemeManager",() => {

    afterEach(() => {
        jest.resetModules();
        jest.unmock('./Theme.json');
    })

    it("should check for themejson file being applied globally",()=>{
        jest.mock("./Theme.json",()=>({
            "primary": "white",
            "accent": "black",
            "a":"b"
        }));
        
        let expectedResult = new ThemeFormat();
        expectedResult.primary="white";
        expectedResult.accent="black";
        const ThemeManager = require("./ThemeManager");
        expect(ThemeManager.default).toStrictEqual(expectedResult);  
    });
    it("should throw error for no file present",() => {
        jest.mock("./Theme.json",()=> {throw new Error('File not found')});
        console.log = jest.fn();
        require("./ThemeManager");
        expect(console.log.mock.calls[0][0]).toBe('Error while loading theme:');
    })
});