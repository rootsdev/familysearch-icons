/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fs-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'fs-icon-temple-ready' : '&#xe004;',
			'fs-icon-endowment' : '&#xe021;',
			'fs-icon-book' : '&#xe028;',
			'fs-icon-birthday-cake' : '&#xe029;',
			'fs-icon-exclamation' : '&#xe020;',
			'fs-icon-x' : '&#xe000;',
			'fs-icon-twitter' : '&#xe001;',
			'fs-icon-facebook' : '&#xe01f;',
			'fs-icon-baptism' : '&#xe02a;',
			'fs-icon-arrow-up' : '&#xe02b;',
			'fs-icon-arrow-right' : '&#xe02c;',
			'fs-icon-arrow-left' : '&#xe02d;',
			'fs-icon-arrow-down' : '&#xe02e;',
			'fs-icon-albums' : '&#xe02f;',
			'fs-icon-add' : '&#xe030;',
			'fs-icon-initiatory' : '&#xe018;',
			'fs-icon-hour-glass' : '&#xe019;',
			'fs-icon-google-plus' : '&#xe01b;',
			'fs-icon-flag' : '&#xe01c;',
			'fs-icon-family-tree' : '&#xe01e;',
			'fs-icon-female' : '&#xe01d;',
			'fs-icon-temple' : '&#xe002;',
			'fs-icon-temple-reserved' : '&#xe003;',
			'fs-icon-temple-done' : '&#xe005;',
			'fs-icon-tag' : '&#xe007;',
			'fs-icon-temple-almost' : '&#xe006;',
			'fs-icon-story' : '&#xe008;',
			'fs-icon-sign-out' : '&#xe009;',
			'fs-icon-help' : '&#xe01a;',
			'fs-icon-lock' : '&#xe017;',
			'fs-icon-sherlock' : '&#xe00a;',
			'fs-icon-share' : '&#xe00b;',
			'fs-icon-male' : '&#xe016;',
			'fs-icon-map' : '&#xe015;',
			'fs-icon-settings' : '&#xe00c;',
			'fs-icon-search' : '&#xe00d;',
			'fs-icon-sealing-to-spouse' : '&#xe00e;',
			'fs-icon-pinterest' : '&#xe010;',
			'fs-icon-sealing-to-parents' : '&#xe00f;',
			'fs-icon-photos' : '&#xe011;',
			'fs-icon-confirmation' : '&#xe023;',
			'fs-icon-documents' : '&#xe022;',
			'fs-icon-check' : '&#xe025;',
			'fs-icon-camera' : '&#xe026;',
			'fs-icon-people-add' : '&#xe014;',
			'fs-icon-people' : '&#xe013;',
			'fs-icon-persons' : '&#xe012;',
			'fs-icon-close' : '&#xe024;',
			'fs-icon-calendar' : '&#xe027;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/fs-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};