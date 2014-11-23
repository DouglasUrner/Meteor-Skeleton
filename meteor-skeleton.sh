if [ ! -d $1 ] ; then
	meteor create $1
	cd $1
	rm $1.{css,html,js}
	mkdir client lib server tests
fi

#meteor add sanjo:jasmine velocity:html-reporter
