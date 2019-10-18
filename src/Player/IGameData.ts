import { IScene } from "../Proxy/IScene";
import { ICamera } from "../Proxy/ICamera";
import { AnimationManager } from "../Animation/AnimationManager";
import { BehaviourManager } from "../Behaviour/BehaviourManager";
import { ObjectManager } from "./ObjectManager";
import { MaterialManager } from "./MaterialManager";
import { TRLevel } from "./TRLevel";
import { Panel } from "../Utils/Panel";
import { ConfigManager } from "../ConfigManager";

export default interface IGameData {
    "container":        Element,
    
    "sceneRender":      IScene,
    "sceneBackground":  IScene,

    "camera":           ICamera,
    
    "bhvMgr":           BehaviourManager,
    "objMgr":           ObjectManager,
    "confMgr":          ConfigManager,
    "matMgr":           MaterialManager,
    "anmMgr":           AnimationManager,
    "trlvl":            TRLevel,

    "curRoom":          number,

    "panel":            Panel,

    [name: string]: any,
}