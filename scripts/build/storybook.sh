echo "📦  Building the static storybook ..."

rm -rf ./storybook
build-storybook -c .storybook -o storybook
