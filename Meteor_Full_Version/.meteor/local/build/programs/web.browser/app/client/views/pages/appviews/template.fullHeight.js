(function(){
Template.__checkName("fullHeight");
Template["fullHeight"] = new Template("Template.fullHeight", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Outlook view"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="fh-breadcrumb">\n\n        <div class="fh-column">\n            <div class="full-height-scroll">\n                <ul class="list-group elements-list">\n                    <li class="list-group-item">\n                        <a data-toggle="tab" href="#tab-1">\n                            <small class="pull-right text-muted"> 16.02.2015</small>\n                            <strong>Ann Smith</strong>\n                            <div class="small m-t-xs">\n                                <p>\n                                    Survived not only five centuries, but also the leap scrambled it to make.\n                                </p>\n                                <p class="m-b-none">\n                                    <i class="fa fa-map-marker"></i> Riviera State 32/106\n                                </p>\n                            </div>\n                        </a>\n                    </li>\n                    <li class="list-group-item active">\n                        <a data-toggle="tab" href="#tab-2">\n                            <small class="pull-right text-muted"> 11.10.2015</small>\n                            <strong>Paul Morgan</strong>\n                            <div class="small m-t-xs">\n                                <p class="m-b-xs">\n                                    There are many variations of passages of Lorem Ipsum.\n                                    <br>\n                                </p>\n                                <p class="m-b-none">\n\n                                    <span class="label pull-right label-primary">SPECIAL</span>\n                                    <i class="fa fa-map-marker"></i> California 10F/32\n                                </p>\n                            </div>\n                        </a>\n                    </li>\n                    <li class="list-group-item">\n                        <a data-toggle="tab" href="#tab-3">\n                            <small class="pull-right text-muted"> 08.04.2015</small>\n                            <strong>Michael Jackson</strong>\n                            <div class="small m-t-xs">\n                                <p class="m-b-xs">\n                                    Look even slightly believable. If you are going to use a passage of.\n                                </p>\n                                <p class="m-b-none">\n                                    <i class="fa fa-map-marker"></i> Berlin 120R/15\n                                </p>\n                            </div>\n                        </a>\n                    </li>\n                    <li class="list-group-item">\n                        <a data-toggle="tab" href="#tab-4">\n                            <small class="pull-right text-muted"> 16.02.2015</small>\n                            <strong>Mark Smith</strong>\n                            <div class="small m-t-xs">\n                                <p class="m-b-xs">\n                                    It was popularised in the 1960s with the release of Letraset sheets\n                                </p>\n                                <p class="m-b-none">\n                                    <i class="fa fa-map-marker"></i> San Francisko 12/100\n                                </p>\n                            </div>\n                        </a>\n                    </li>\n                    <li class="list-group-item">\n                        <a data-toggle="tab" href="#tab-1">\n                            <small class="pull-right text-muted"> 21.04.2015</small>\n                            <strong>Monica Novak</strong>\n                            <div class="small m-t-xs">\n                                <p class="m-b-xs">\n                                    Printer took a galley of type and scrambled.\n                                </p>\n                                <p class="m-b-none">\n                                    <i class="fa fa-map-marker"></i> New York 15/43\n                                </p>\n                            </div>\n                        </a>\n                    </li>\n                    <li class="list-group-item">\n                        <a data-toggle="tab" href="#tab-2">\n                            <small class="pull-right text-muted"> 03.12.2015</small>\n                            <strong>Jack Smith</strong>\n                            <div class="small m-t-xs">\n                                <p class="m-b-xs">\n                                    Also the leap into electronic typesetting, remaining.\n                                </p>\n                                <p class="m-b-none">\n                                    <i class="fa fa-map-marker"></i> Sant Fe 10/106\n                                </p>\n                            </div>\n                        </a>\n                    </li>\n                    <li class="list-group-item">\n                        <a data-toggle="tab" href="#tab-3">\n                            <small class="pull-right text-muted"> 08.04.2015</small>\n                            <strong>Michael Jackson</strong>\n                            <div class="small m-t-xs">\n                                <p class="m-b-xs">\n                                    Look even slightly believable. If you are going to use a passage of.\n                                </p>\n                                <p class="m-b-none">\n                                    <i class="fa fa-map-marker"></i> Berlin 120R/15\n                                </p>\n                            </div>\n                        </a>\n                    </li>\n                    <li class="list-group-item">\n                        <a data-toggle="tab" href="#tab-4">\n                            <small class="pull-right text-muted"> 16.02.2015</small>\n                            <strong>Mark Smith</strong>\n                            <div class="small m-t-xs">\n                                <p class="m-b-xs">\n                                    It was popularised in the 1960s with the release of Letraset sheets\n                                </p>\n                                <p class="m-b-none">\n                                    <i class="fa fa-map-marker"></i> San Francisko 12/100\n                                </p>\n                            </div>\n                        </a>\n                    </li>\n                    <li class="list-group-item">\n                        <a data-toggle="tab" href="#tab-1">\n                            <small class="pull-right text-muted"> 21.04.2015</small>\n                            <strong>Monica Novak</strong>\n                            <div class="small m-t-xs">\n                                <p class="m-b-xs">\n                                    Printer took a galley of type and scrambled.\n                                </p>\n                                <p class="m-b-none">\n                                    <i class="fa fa-map-marker"></i> New York 15/43\n                                </p>\n                            </div>\n                        </a>\n                    </li>\n\n\n                </ul>\n\n            </div>\n        </div>\n\n        <div class="full-height">\n            <div class="full-height-scroll white-bg border-left">\n\n                <div class="element-detail-box">\n\n                    <div class="tab-content">\n                        <div id="tab-1" class="tab-pane">\n\n                            <div class="pull-right">\n                                <div class="tooltip-demo">\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i class="fa fa-plug"></i> Plug it</button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i class="fa fa-eye"></i> </button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important"><i class="fa fa-exclamation"></i> </button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash"><i class="fa fa-trash-o"></i> </button>\n\n                                </div>\n                            </div>\n                            <div class="small text-muted">\n                                <i class="fa fa-clock-o"></i> Friday, 12 April 2014, 12:32 am\n                            </div>\n\n                            <h1>\n                                Their separate existence is a myth\n                            </h1>\n\n                            <p>\n                                The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.\n                            </p>\n                            <p>\n                                The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.\n                            </p>\n                            <p>\n                                The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.\n                            </p>\n\n                            <p>\n                                The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.\n                            </p>\n                            <p>\n                                The new common language will be more simple and regular than the existing European languages. It will be as simpl.\n                            </p>\n                            <p>\n                                To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.\n                            </p>\n                            <p>\n                                The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.\n                            </p>\n                            <p>\n                                It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.\n                            </p>\n\n                            <p>\n                                The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.\n                            </p>\n                            <p>\n                                To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.\n                            </p>\n                            <p class="small">\n                                <strong>Best regards, Anthony Smith </strong>\n                            </p>\n\n                            <div class="m-t-lg">\n                                <p>\n                                    <span><i class="fa fa-paperclip"></i> 2 attachments - </span>\n                                    <a href="#">Download all</a>\n                                    |\n                                    <a href="#">View all images</a>\n                                </p>\n\n                                <div class="attachment">\n                                    <div class="file-box">\n                                        <div class="file">\n                                            <a href="#">\n                                                <span class="corner"></span>\n\n                                                <div class="icon">\n                                                    <i class="fa fa-file"></i>\n                                                </div>\n                                                <div class="file-name">\n                                                    Document_2014.doc\n                                                    <br>\n                                                    <small>Added: Jan 11, 2014</small>\n                                                </div>\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                    <div class="file-box">\n                                        <div class="file">\n                                            <a href="#">\n                                                <span class="corner"></span>\n\n                                                <div class="icon">\n                                                    <i class="fa fa-line-chart"></i>\n                                                </div>\n                                                <div class="file-name">\n                                                    Seels_2015.xls\n                                                    <br>\n                                                    <small>Added: May 13, 2015</small>\n                                                </div>\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                    <div class="clearfix"></div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div id="tab-2" class="tab-pane active">\n                            <div class="pull-right">\n                                <div class="tooltip-demo">\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i class="fa fa-plug"></i> Plug it</button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i class="fa fa-eye"></i> </button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important"><i class="fa fa-exclamation"></i> </button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash"><i class="fa fa-trash-o"></i> </button>\n\n                                </div>\n                            </div>\n                            <div class="small text-muted">\n                                <i class="fa fa-clock-o"></i> Monday, 21 May 2014, 10:32 am\n                            </div>\n\n                            <h1>\n                                The European languages - same family.\n                            </h1>\n\n                            <p>\n                                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.\n                            </p>\n                            <p>\n                                The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.\n                            </p>\n\n                            <p>\n                                The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.\n                            </p>\n                            <p>\n                                To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.\n                            </p>\n                            <p>\n                                The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.\n                            </p>\n\n                            <p>\n                                The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.\n                            </p>\n                            <p>\n                                To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.\n                            </p>\n                            <p class="small">\n                                <strong>Best regards, Anthony Smith </strong>\n                            </p>\n\n                            <div class="m-t-lg">\n                                <p>\n                                    <span><i class="fa fa-paperclip"></i> 2 attachments - </span>\n                                    <a href="#">Download all</a>\n                                    |\n                                    <a href="#">View all images</a>\n                                </p>\n\n                                <div class="attachment">\n                                    <div class="file-box">\n                                        <div class="file">\n                                            <a href="#">\n                                                <span class="corner"></span>\n\n                                                <div class="icon">\n                                                    <i class="fa fa-file"></i>\n                                                </div>\n                                                <div class="file-name">\n                                                    Document_2014.doc\n                                                    <br>\n                                                    <small>Added: Jan 11, 2014</small>\n                                                </div>\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                    <div class="file-box">\n                                        <div class="file">\n                                            <a href="#">\n                                                <span class="corner"></span>\n\n                                                <div class="icon">\n                                                    <i class="fa fa-line-chart"></i>\n                                                </div>\n                                                <div class="file-name">\n                                                    Seels_2015.xls\n                                                    <br>\n                                                    <small>Added: May 13, 2015</small>\n                                                </div>\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                    <div class="clearfix"></div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div id="tab-3" class="tab-pane">\n                            <div class="pull-right">\n                                <div class="tooltip-demo">\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i class="fa fa-plug"></i> Plug it</button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i class="fa fa-eye"></i> </button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important"><i class="fa fa-exclamation"></i> </button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash"><i class="fa fa-trash-o"></i> </button>\n\n                                </div>\n                            </div>\n                            <div class="small text-muted">\n                                <i class="fa fa-clock-o"></i> Tuesday, 15 May 2014, 10:32 am\n                            </div>\n\n                            <h1>\n                                To take a trivial example\n                            </h1>\n\n                            <p>\n                                But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.\n                            </p>\n                            <p>\n                                The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.\n                            </p>\n\n                            <p>\n                                he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and.\n                            </p>\n                            <p>\n                                To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.\n                            </p>\n\n                            <p>\n                                The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.\n                            </p>\n                            <p>\n                                To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce.\n                            </p>\n                            <p class="small">\n                                <strong>Best regards, Anthony Smith </strong>\n                            </p>\n\n                            <div class="m-t-lg">\n                                <p>\n                                    <span><i class="fa fa-paperclip"></i> 2 attachments - </span>\n                                    <a href="#">Download all</a>\n                                    |\n                                    <a href="#">View all images</a>\n                                </p>\n\n                                <div class="attachment">\n                                    <div class="file-box">\n                                        <div class="file">\n                                            <a href="#">\n                                                <span class="corner"></span>\n\n                                                <div class="icon">\n                                                    <i class="fa fa-file"></i>\n                                                </div>\n                                                <div class="file-name">\n                                                    Document_2014.doc\n                                                    <br>\n                                                    <small>Added: Jan 11, 2014</small>\n                                                </div>\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                    <div class="file-box">\n                                        <div class="file">\n                                            <a href="#">\n                                                <span class="corner"></span>\n\n                                                <div class="icon">\n                                                    <i class="fa fa-line-chart"></i>\n                                                </div>\n                                                <div class="file-name">\n                                                    Seels_2015.xls\n                                                    <br>\n                                                    <small>Added: May 13, 2015</small>\n                                                </div>\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                    <div class="clearfix"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div id="tab-4" class="tab-pane">\n                            <div class="pull-right">\n                                <div class="tooltip-demo">\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i class="fa fa-plug"></i> Plug it</button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i class="fa fa-eye"></i> </button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important"><i class="fa fa-exclamation"></i> </button>\n                                    <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash"><i class="fa fa-trash-o"></i> </button>\n\n                                </div>\n                            </div>\n                            <div class="small text-muted">\n                                <i class="fa fa-clock-o"></i> Thursday, 27 april 2014, 10:32 am\n                            </div>\n\n                            <h1>\n                                Gregor Samsa woke from troubled dreams.\n                            </h1>\n\n                            <p>\n                                His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.\n                            </p>\n                            <p>\n                                To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.\n                            </p>\n                            <p>\n                                Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there\'s the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them.\n                            </p>\n\n                            <p>\n                                The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.\n                            </p>\n                            <p>\n                                To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.\n                            </p>\n                            <p class="small">\n                                <strong>Best regards, Anthony Smith </strong>\n                            </p>\n\n                            <div class="m-t-lg">\n                                <p>\n                                    <span><i class="fa fa-paperclip"></i> 2 attachments - </span>\n                                    <a href="#">Download all</a>\n                                    |\n                                    <a href="#">View all images</a>\n                                </p>\n\n                                <div class="attachment">\n                                    <div class="file-box">\n                                        <div class="file">\n                                            <a href="#">\n                                                <span class="corner"></span>\n\n                                                <div class="icon">\n                                                    <i class="fa fa-file"></i>\n                                                </div>\n                                                <div class="file-name">\n                                                    Document_2014.doc\n                                                    <br>\n                                                    <small>Added: Jan 11, 2014</small>\n                                                </div>\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                    <div class="file-box">\n                                        <div class="file">\n                                            <a href="#">\n                                                <span class="corner"></span>\n\n                                                <div class="icon">\n                                                    <i class="fa fa-line-chart"></i>\n                                                </div>\n                                                <div class="file-name">\n                                                    Seels_2015.xls\n                                                    <br>\n                                                    <small>Added: May 13, 2015</small>\n                                                </div>\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                    <div class="clearfix"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n\n\n\n    </div>') ];
}));

})();