import FeaturesData from './FeaturesData';
function Features(){
    return(
        <>
        <FeaturesData name="Declarative" data="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug."  />
        <FeaturesData name="Component-Based" data="Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."  />
        <FeaturesData name="Learn Once,Write AnyWhere" data="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native."  />
        </>
    );
}
export default Features;