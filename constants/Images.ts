
const Images = {
    emailIcon: require('../assets/images/icon _mail_.png'),
    lockIcon: require('../assets/images/icon _lock_.png'),
}

let patch: {} = "";

export function imageLink(imagePatch: string) {
    if (imagePatch === 'emailIcon'){
        patch = Images.emailIcon;
    }
    else if (imagePatch === 'lockIcon'){
        patch === Images.lockIcon;
    }

    return patch;
};
