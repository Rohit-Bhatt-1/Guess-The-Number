class ThemeFormat{
    background: string;
    data: string;
    primary: string;
    dark_primary: string;
    light_primary: string;
    accent: string;
    link: string;
    action: string;
    flash: string;
    media: string;
    notice: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    cardBackground:string;

    constructor()
    {
        this.background = "";
        this.data = "";
        this.primary = "";
        this.dark_primary = "";
        this.light_primary = "";
        this.accent = "";
        this.link = "";
        this.action = "";
        this.flash = "";
        this.media = "";
        this.notice = "";
        this.error = "";
        this.warning = "";
        this.info = "";
        this.success = "";
        this.cardBackground="";
    }
}

export default ThemeFormat;