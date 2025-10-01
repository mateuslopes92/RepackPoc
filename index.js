import { Script, ScriptManager, ScriptSource } from '@callstack/repack/client';

import App from './App';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

// Dev resolver: Re.Pack dev server serves chunks automatically
ScriptManager.shared.addResolver(async (scriptId) => {
  console.log("scriptId", scriptId)
  return new ScriptSource(Script.getDevServerURL(scriptId));
});

AppRegistry.registerComponent(appName, () => App);
