function configureDropDownLists(lista,claimtype) {
    var pension = ['pen1', 'pen2', 'pen3'];
    var accidente = ['acc4', 'acc5', 'acc6'];
    var laboral = ['lab7', 'lab8', 'lab9'];

    switch (lista.value) {
        case 'Pension':
            claimtype.options.length = 0;
            for (i = 0; i < pension.length; i++) {
                createOption(claimtype, pension[i], pension[i]);
            }
            break;
        case 'Accidente':
            claimtype.options.length = 0; 
        for (i = 0; i < accidente.length; i++) {
            createOption(claimtype, accidente[i], accidente[i]);
            }
            break;
        case 'Laboral':
            claimtype.options.length = 0;
            for (i = 0; i < laboral.length; i++) {
                createOption(claimtype, laboral[i], laboral[i]);
            }
            break;
            default:
                claimtype.options.length = 0;
            break;
    }
}

    function createOption(mainclaim, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        mainclaim.options.add(opt);
    }