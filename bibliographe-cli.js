#!/usr/bin/env node
 // MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM$$ZZZZZZ$$$ZZ$$$ZMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMMMMMMMMMMM$$$$ZZ$$$$$$$$$$Z$$$$$$$$$$ZMMMMMMMMMMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMMMMMMMZZOZZ$$$$Z$$Z$ZZ$Z$Z$$$$$$$7$$$$$$$MMMMMMMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMMMMZOZ$Z$$ZZ$Z$Z$$Z$$$$$$$Z$$$$$$77$$7$$$$77MMMMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMM$$$$$$Z$$ZZZZZZZ$Z7$$$Z$$$$$$$$$$$7$7$7777777OMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMO$$$$$$$$$Z$$$Z$Z$$$$$Z$$Z$$$$77$77$$77777777I7778MMMMMMMMMMMMMMM
 // MMMMMMMMMMMMM$$$$7$$$$$$ZZ$$Z7$$Z$$$$$$$$$$$7$77$$7777777777I7II7INMMMMMMMMMMMMM
 // MMMMMMMMMMMZ$$$7$7$7$$$$Z$$$Z$ZZZ$$$7$ZZ77777$$7$$$7777IIII7IIII????MMMMMMMMMMMM
 // MMMMMMMMMM7$$$77$$$$77$$$$$$Z$$$$$7777IIIII$7$Z7777$$77I$7II??+???+++MMMMMMMMMMM
 // MMMMMMMM877$777$$$$$7$$$Z$$$$$$$$?II?I?I?II???7$ZZ$$7777I7I????++??+++=MMMMMMMMM
 // MMMMMMMO$7$$$7$$$$$$$7$ZZZ$$$$$I7I+I?I?I?I$II$7$ZZ$O7$II7III?I??+?+?++++MMMMMMMM
 // MMMMMM$$77$7$$$$$$$7$$$Z$ZZ$$$7=====+=++++++??I?ZO$OZ$77III?I++?+++++==+~MMMMMMM
 // MMMMMZ7777$$$$Z$$$7$ZZZZ$ZZ$Z$+======+++++++??I?IZZZ8O7I7I????++??++++==++MMMMMM
 // MMMM87777$7$$$$$$Z7$ZZZZZ$ZZZI======+=++?????IIII$DO8D$7?I??+++++++++++++++MMMMM
 // MMMM7$7$7777$$$$$ZZ$$ZZ$Z$ZZ$+==++++++++?I?II7?77Z88D8OI????++?+??+++++++++7MMMM
 // MMM77$7$$77$$$$$Z$ZZZZOZZZZZZ+?777~=+==$7$77$777$ZOOOND77II?+???+++?++++++++MMMM
 // MM8?7$77777$$$$$ZZZ$ZZOZZZZZO=7+?$$77+I7?7888Z$ZZZO8DDD$II?????+?++++?+++++++MMM
 // MMI77$7$$7$$$$$ZZZZOZOOZZOOZO+7ZDZZ8I7O8O8OODOOZZ888NNZII??????+?++?++++?++++NMM
 // M$II$$$$$$$$Z$ZZZZZZZOZZOOZOZI7I77$I+IZO8OZOO$$ZO88NZ8DZ7?I???+???+++++++++++~MM
 // MII777$7$$Z$Z$ZZZ$ZZZZZZOOZZZ++++???=IZZ$7$$77$ZO8DNN8DD7I????????????+?+?+++=MM
 // M?I777$$$$$ZZZZZ$ZZOOOOZOOZZO???I$+77$Z$Z77$7$ZOOD8ODO8I7I?III?++??+?=++?+++++~M
 // Z?III$$77$$$$$$ZZZZZZZZOZOOOZ+?I7$7DDNDM$$$$$ZZ8888DZ8$7II??I?I+????+?+??+++?==M
 // ?????77$$$$$$Z$$Z$ZZZZO88OOOO7I7$ZZ7NNN88Z$OZOODD8D8D7$77??I?I???????????+++++=M
 // II?I?77$$$$Z$$Z$Z$ZZZOOOOZO8OZI$$O8NMNNNMN8O88DNONZ7$$7III?II?I?????++??++?++++M
 // ????I77$$$$$Z$ZZZOZZOOO8O8OODO7Z8NDZZ8MNN8N88DDNND$$77777III?????I?????+?+?++++M
 // IIIII777$ZZ$Z$ZZZZZZOOO8OOOO8O8ONDZDN8DNMNNNNNNND8$$77$I7I7IIIIIII??I?????+?+++N
 // II7I777Z$$$$$$$$$ZZZOOO8OOOOD8Z$Z$OO88DNNDMNDNNNDON7$77$7IIIIIIII??????+????+++N
 // III777$$$$$$Z$$$ZZZZZO8888O8DOZ7ZIZDO8N8DDDNNND887NN$$77777IIIII?????+???++++++M
 // ?II7I77$$Z$$$$$$$ZOZZO88O88ODO7III8ZON8DDMDNDD8N7IZDND87777IIIII?I?????????+?+?M
 // $7I77$7$$Z$$$$Z$$ZZ$OOZOZOO88Z$?I$ZZ8DDOONNND877II7DNNDDDD$IIII???????????+??+=M
 // N777$$$$$$$$$$$$Z$ZZOOOOZ$ZO8ZZ$7$OODDNNDNDDD$7I?IDDNDDNDDDDD$I?+?????????????+M
 // M777$7$$ZZZZZZ$$Z$ZZ$7ZZOOOOOOZO8+OZO8NDDDDZ$7I??78NNDNDNNDDD888Z????????????+MM
 // M$$$$$7Z$ZZZZZ$$$7$$ZZZOOOODO8OODO+=$$O8OOZ$77??+DDDNNDDDNNDDDD88DDO??????+???MM
 // MM7$7$Z$$$Z$ZZ$7OZOZO8O88Z8OOZ88NO8ODMDNDDMNN8I?8DDNDDDDDNDD8DD8D888OOOI????+DMM
 // MM$7$$$$$$$Z$Z$ODOZODD88O88OODODND8DNMDDMNDDDD+DDDDDDD88DDNDDDDD8DDD8888Z??+=MMM
 // MMM7$$$$$Z$ZZZZOD888D8O88DD8ND88ND88NN?I7$$O$I$DDDDDD8NNDDDDDDD8DD888888O??+MMMM
 // MMMM$$Z$ZZ$ZZZ888OD8DD88ODDZDD8D8NDO7?++++$?+?8D8DNDDD8NNDDDDDD88DD888888Z+OMMMM
 // MMMMO$$OZ$OZZOO8888888OZO8Z8DD8O8NDOO+++++++=8DDDDDDD8DDDDD8DDD888888888OO+MMMMM
 // MMMMM$$ZZZOZ$Z8888O88OZZO88O8888DDD8OZ++=+++88DNNDDDDDDDNDDD8D8DDD888888OOMMMMMM
 // MMMMMMZZZZZ$O8O88DO88ZZOOO888O88DDD8OO++==~OO8DNNDD8DDDDND88DDD88888888O8MMMMMMM
 // MMMMMMMOZZZ$OO88DD88ZO7ODO888888D8DD8OO$==888DDDDDZDDDNDDD8DD88DD888888OMMMMMMMM
 // MMMMMMMM$Z$O8888D888ZZ$88O888OO8DDDDOO88=O8O8DN8D8O8DDD8D888D8DD8888O8OMMMMMMMMM
 // MMMMMMMMMMZO8OO8888OZ$OO88D88OO8D8D8D88888DODDDD8D8NDDDDD8D8D8DDDDO8O8MMMMMMMMMM
 // MMMMMMMMMMMO8O8O8D8OZ$O8888DDDO888DN888888888DD88DD8D8DDD8D88888D888MMMMMMMMMMMM
 // MMMMMMMMMMMMMOO888OZ$ZO88DDDDN8888D8NDD8DDODDD8DDDDDDDD88DD888D88ZOMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMD888ZZ$OO888DDDNDN8D8DDDDDM88888NNDDDDDD8D8888D8D88MMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMOOZZZO88888DDDDDDDD8DDDD888DNNNDDD888D8D88888DOMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMMMMOO8888D88D8D8D8DDDDDDDNDNDDDDD888888O8888NMMMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMMMMMMMO88888DDD8DDDDDD88DDDNDDDD888888D88OMMMMMMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMMMMMMMMMM88888O88D8DDD8D8DDDDD8D888OZOMMMMMMMMMMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO888888D888DD888OOONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 // MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 // author: gauthiier.info
 

var fs = require('fs');
var _ = require('underscore')._;
var CSL = require("./lib/citeproc").CSL;

var conf_default = {
    locale : "en-US",
    style : "chicago-note-bibliography",
    output : "html",
    csl_path : __dirname + "/csl/",
    csl_locales_path : __dirname + "/csl-locales/",
    items : "all",
    sort : true
};

var conf = (fs.existsSync(__dirname + '/config.json') ? JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8')) : "");
conf = _.extend({}, conf_default, conf);

var locales = {
    'en-US': fs.readFileSync(conf.csl_locales_path + 'locales-en-US.xml', 'utf8'),
    'English': fs.readFileSync(conf.csl_locales_path + 'locales-en-US.xml', 'utf8'),
    'fr-FR': fs.readFileSync(conf.csl_locales_path + 'locales-fr-FR.xml', 'utf8'),
    'French': fs.readFileSync(conf.csl_locales_path + 'locales-fr-FR.xml', 'utf8')
    };

var style_file = "";
var data_file = "";
var input_file = "";
var frags_file = "";

for (var i = 0; i < process.argv.length; i++) {
    switch(process.argv[i])
    {
        case "--data":
            var data_file = process.argv[++i];
            break;

        case "--output":
            var o = process.argv[++i];
            if(o == 'html' || o == 'md' || o == 'txt') conf.output = o;
            break;            

        case "--style":
            conf.style = process.argv[++i];
            break;

        case "--items":
            var items = JSON.parse(process.argv[++i]);
            if(items instanceof Array)
                conf.items = items;
            break;

        case "--locale":
            var l = process.argv[++i];
            if(_.contains(locales, l))
                conf.locale = l;
            break;

        case "--no-sort":
            config.sort = false;
            break;

        case "--outputfile":
            input_file = process.argv[++i];
            break;

        case "--fragments":
            frags_file = process.argv[++i];
            break;

        case "--help":
            print_usage();
            process.exit(1);
    }
}

style_file = conf.csl_path + conf.style + '.csl';
var style = fs.existsSync(style_file) ? fs.readFileSync(style_file, 'utf8') : "";
var data = (data_file && fs.existsSync(data_file)) ? JSON.parse(fs.readFileSync(data_file, 'utf8')) : "";
var input = (input_file && fs.existsSync(input_file)) ? fs.readFileSync(input_file, 'utf8') : "";
var fragments = (frags_file && fs.existsSync(frags_file)) ? JSON.parse(fs.readFileSync(frags_file, 'utf8')) : [{token: "#bib", items: conf.items}];

if(!(data)) {
    console.log("unexpected input data --- see refactorbib.js");
    process.exit(0);
} else if(!(style)) {
    console.log("unxpected style --- please specify a valid csl style and make sure you have it installed localy.");
    process.exit(0);    
}

var sys = {
    items: data,    
    retrieveLocale: function(lang){
        var ret = locales[lang];
        return ret;
    },
    retrieveItem: function(id){
        return this.items[id];
    }
};

var engine = new CSL.Engine(sys, style, conf.locale, conf.locale);

var output = input;

for(var i = 0; i < fragments.length; i++) {

    var frag = fragments[i];

    if(!(frag.items instanceof Array) && frag.items === 'all') {
        frag.items = [];
        _.each(data, function (val, key) {        
            if(val) frag.items.push(key);
        });
    }

    if(conf.sort)
        frag.items.sort();
    
    engine.updateItems(frag.items, true);
    var bib = engine.makeBibliography();

    if(conf.output == "md") {
        var md = tomarkdown(bib);
        if(input) {
            output = inject(output, frag.token, md);
        } else {
            output += md;
        }
        
    } else if(conf.output == "html") {
        var html = tohtml(bib);
        if(input) {
            output = inject(output, frag.token, html);
        } else {
            html = "<html>\n<head>\t<meta charset=\"utf-8\">\n</head>\n<body>" + html + "\n</body>";
            output += html;
        }
    } else if(conf.output == "txt") {
        var txt = totxt(bib);
        if(input) {
            output = inject(output, frag.token, txt);
        } else {
            output += txt;
        }
    }     

}

// print results to stdout
console.log(output);

// helper functions

function inject(data, token, input) {
    return data.replace(token, input);
}

function tomarkdown(bib) {
    var md = "";
    _.each(bib[1], function (e) {
        md += (">" + escape_csl_entry(e).replace("<i>", "*").replace("</i>", "*") + "\n");
    });    
    return md;
}

function tohtml(bib) {
    var html = bib[0].bibstart + "\n";
    _.each(bib[1], function (e) {
        html += e + "\n";
    });
    html += bib[0].bibend + "\n";
    return html;
}

function totxt(bib) {
    var txt = "";
    _.each(bib[1], function (e) {
        txt += escape_csl_entry(escape_italic(e)) + "\n";
    });    
    return txt;
}

function escape_csl_entry(b) {
    return b.replace("<div class=\"csl-entry\">", "").replace("</div>", "");
}

function escape_italic(b) {
    return b.replace("<i>", "").replace("</i>", "");   
}

function print_usage() {
    L = console.log;
    L("Usage: bibliographe [options]\n");
    L("Options:");
    L("\t--help:\t\tshow this help message and exit");
    L("\t--data DATA\n\t\t\tCSL json file to convert");
    L("\t--output {'html', 'md', 'txt'}\n\t\t\toutput format - html, markdown or plain text\n\t\t\tdefault: html");
    L("\t--style STYLE\n\t\t\tprocessor output style \n\t\t\tsee https://github.com/citation-style-language/styles-distribution\n\t\t\tdefault: chicago-note-bibliography");
    L("\t--items [list]\n\t\t\tlist of items from the data input file to convert. \n\t\t\tex:[\"Guattari1980\", \"Lazzarato2014\"]\n\t\t\tdefault: all");
}


