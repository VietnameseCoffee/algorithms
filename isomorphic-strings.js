var isIsomorphic = function(s, t) {

    const map = {};
    const marked = {};

    for (i=0;i<t.length;i++) {
        if (map[s[i]] === undefined) {
            if (marked[t[i]]) {
                return false;
            } else {
                marked[t[i]] = true;
                map[s[i]] = t[i];
            }
        } else {
            if (map[s[i]] !== t[i]) {
                return false;
            }
        }
    }

    return true;
};
