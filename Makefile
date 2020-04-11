develop:
	./make-venv.sh

clean:
	rm -rf .DS_STORE
	rm -rf .idea/
	

check: develop
	black -l140 app/
