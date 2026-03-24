import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  LayoutDashboard, 
  Users, 
  ChevronRight, 
  Shield, 
  Repeat,
  Settings,
  Target,
  Zap,
  FileText,
  Plus,
  Filter,
  CreditCard,
  Lock,
  Eye,
  ShieldCheck,
  BellRing,
  Download,
  Mic,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Pie,
  PieChart as RePieChart
} from 'recharts';

const mobilityData = [
  { name: 'Jan', value: 45, target: 40 },
  { name: 'Feb', value: 52, target: 48 },
  { name: 'Mar', value: 48, target: 50 },
  { name: 'Apr', value: 61, target: 55 },
  { name: 'May', value: 55, target: 58 },
  { name: 'Jun', value: 67, target: 60 },
];

const departmentData = [
  { name: 'Engineering', count: 42, color: '#0078D4' },
  { name: 'Marketing', count: 28, color: '#111111' },
  { name: 'Sales', count: 18, color: '#605E5C' },
  { name: 'Product', count: 35, color: '#005A9E' },
];

const analyticStats = [
  { label: 'TRANSITIONS', value: '482', trend: '+14%', icon: Repeat, color: 'text-[#0078D4]', bg: 'bg-[#0078D4]/5' },
  { label: 'AI MOCK INTERVIEWS', value: '312', trend: '+22%', icon: Mic, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'AI RESUMES BUILT', value: '956', trend: '+18%', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'TOKEN PULSE (POOL)', value: '8.4M', trend: '72%', icon: Zap, color: 'text-[#0078D4]', bg: 'bg-[#0078D4]/5' },
];

function ModalContent({ type, onClose }: any) {
  const renderInner = () => {
    switch(type) {
      case 'risk': return (
        <div className="p-16 space-y-10">
          <div className="flex justify-between items-center">
             <div>
                <h3 className="text-4xl font-bold text-[#111111]">AI Flight Risk <span className="text-[#0078D4]">Predictor.</span></h3>
                <p className="text-sm font-medium text-[#605E5C] mt-2">Activity-based attrition forecasting for Top Talent</p>
             </div>
             <div className="w-24 h-24 bg-red-50 text-red-600 rounded-[32px] flex items-center justify-center text-4xl font-bold border border-red-100 shadow-xl shadow-red-500/10">84%</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-8 bg-[#F8F7F4] rounded-3xl space-y-4">
                <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">Primary Stessors Detected</p>
                <div className="space-y-3">
                   <p className="text-xs font-bold text-[#111111] flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Intensive Interview Prep (Last 48h)</p>
                   <p className="text-xs font-bold text-[#111111] flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Resume Score Spike (Gold Grade)</p>
                   <p className="text-xs font-bold text-[#111111] flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> LinkedIn Profile Mapping Detected</p>
                </div>
             </div>
             <div className="p-8 bg-blue-50 rounded-3xl space-y-4 border border-blue-100">
                <p className="text-[10px] font-bold text-[#0078D4] uppercase tracking-widest">Recommended Retention Act</p>
                <p className="text-sm font-medium text-blue-900 leading-relaxed">"Suggest an internal promotion bypass or initiate 'Strategic Growth' conversation. Estimated churn window: 14-21 days."</p>
                <button className="w-full h-12 bg-[#0078D4] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest">Initiate Conversation</button>
             </div>
          </div>
        </div>
      );
      case 'gap': return (
        <div className="p-16 space-y-12">
           <h3 className="text-4xl font-bold text-[#111111]">Skill Gap <span className="text-[#0078D4]">Visualization.</span></h3>
           <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-80 h-80 bg-[#111111] rounded-full flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
                 <svg className="w-64 h-64 -rotate-90 relative z-10">
                    <circle cx="128" cy="128" r="100" fill="transparent" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
                    <circle cx="128" cy="128" r="70" fill="transparent" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
                    <polygon points="128,40 160,100 220,128 160,150 128,210 90,150 40,128 90,100" fill="#0078D4" fillOpacity="0.6" stroke="#0078D4" strokeWidth="2" />
                 </svg>
                 <div className="absolute inset-x-0 bottom-8 text-center text-[8px] font-bold text-white/40 tracking-[0.5em] uppercase">Talent Pulse Sync</div>
              </div>
              <div className="flex-1 space-y-8">
                 {[
                    { label: 'Technical Depth', gap: -12, color: 'text-red-500' },
                    { label: 'Strategic Influence', gap: +24, color: 'text-green-500' },
                    { label: 'Operational Speed', gap: -5, color: 'text-amber-500' },
                    { label: 'AI Fluency', gap: +48, color: 'text-blue-500' },
                 ].map(f => (
                    <div key={f.label} className="flex justify-between items-center border-b border-[#F8F7F4] pb-4">
                       <span className="text-xs font-bold text-[#605E5C] uppercase tracking-widest">{f.label}</span>
                       <span className={`text-sm font-bold ${f.color}`}>{f.gap > 0 ? `+${f.gap}%` : `${f.gap}%`} Over Baseline</span>
                    </div>
                 ))}
                 <p className="text-xs font-medium text-[#A19F9D] leading-relaxed">System prediction: Role transition successful with 14% technical upskilling.</p>
              </div>
           </div>
        </div>
      );
      case 'transcript': return (
        <div className="p-16 space-y-12">
           <div className="flex justify-between items-start">
              <h3 className="text-4xl font-bold text-[#111111]">Interview <span className="text-purple-600">Playback.</span></h3>
              <div className="px-4 py-2 bg-purple-50 text-purple-600 rounded-xl text-[10px] font-bold border border-purple-100 uppercase tracking-widest">Sentiment: High Agency</div>
           </div>
           <div className="space-y-8 max-h-[400px] overflow-y-auto custom-scrollbar pr-6">
              <div className="flex gap-6 group">
                 <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shrink-0 shadow-lg text-white font-bold text-[10px]">AI</div>
                 <div className="p-6 bg-purple-50 rounded-3xl rounded-tl-none border border-purple-100 flex-1">
                    <p className="text-sm font-medium text-purple-900 leading-relaxed">"Can you describe a situation where you had to manage a stakeholder with conflicting priorities?"</p>
                 </div>
              </div>
              <div className="flex gap-6 flex-row-reverse group">
                 <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center shrink-0 shadow-lg text-white font-bold text-[10px]">EMP</div>
                 <div className="p-6 bg-[#F8F7F4] rounded-3xl rounded-tr-none border border-[#EAEAEA] flex-1">
                    <p className="text-sm font-medium text-[#111111] leading-relaxed">"Certainly. During the Cloud Migration project, I balanced the Security team's freeze requests with the Product team's launch deadline by..."</p>
                 </div>
              </div>
              <div className="flex gap-6 group">
                 <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shrink-0 shadow-lg text-white font-bold text-[10px]">AI</div>
                 <div className="p-6 bg-purple-50 rounded-3xl rounded-tl-none border border-purple-100 flex-1">
                    <p className="text-sm font-medium text-purple-900 leading-relaxed">"Excellent negotiation. Let's dig deeper into the risk mitigation strategy you chose."</p>
                 </div>
              </div>
           </div>
           <div className="flex gap-4 pt-12 border-t border-[#F8F7F4]">
              <button className="flex-1 h-14 bg-purple-600 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl">Export Analysis</button>
              <button className="flex-1 h-14 border border-[#EAEAEA] text-[#111111] rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F8F7F4]">Close Preview</button>
           </div>
        </div>
      );
      case 'refill': return (
        <div className="p-16 space-y-12">
           <h3 className="text-4xl font-bold text-[#111111]">Token Refill <span className="text-[#0078D4]">Logic.</span></h3>
           <div className="space-y-6">
              {[
                 { rule: 'Performance Refill', if: 'Success Rate > 92%', then: '+250k Tokens', active: true },
                 { rule: 'Budget Anchor', if: 'Date = 1st of Month', then: 'Reset to 2.5M Tokens', active: true },
                 { rule: 'Burn Alert', if: 'Usage > 50k/hr', then: 'Throttle Access', active: false },
              ].map(r => (
                 <div key={r.rule} className="p-8 bg-white border border-[#EAEAEA] rounded-[32px] flex items-center justify-between group hover:border-[#0078D4] transition-all">
                    <div className="flex items-center gap-8">
                       <div className={`w-12 h-12 rounded-2xl ${r.active ? 'bg-blue-50 text-[#0078D4]' : 'bg-[#F8F7F4] text-[#A19F9D]'} flex items-center justify-center`}><Zap size={20} /></div>
                       <div>
                          <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">{r.rule}</p>
                          <p className="text-sm font-bold text-[#111111] mt-1 italic">IF {r.if} → THEN {r.then}</p>
                       </div>
                    </div>
                    <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${r.active ? 'bg-[#0078D4]' : 'bg-[#EAEAEA]'}`}><div className={`w-4 h-4 rounded-full bg-white transition-transform ${r.active ? 'translate-x-6' : ''}`} /></div>
                 </div>
              ))}
           </div>
           <button className="w-full h-16 bg-[#111111] text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4"><Plus size={18} /> Add Custom Governance Logic</button>
        </div>
      );
      case 'roi': return (
        <div className="p-16 space-y-12">
            <div className="flex justify-between items-end">
               <div>
                  <h3 className="text-4xl font-bold text-[#111111]">Economic <span className="text-green-600">ROI.</span></h3>
                  <p className="text-sm font-medium text-[#605E5C] mt-2">Aggregate Enterprise Savings via AI Upskilling</p>
               </div>
               <div className="text-right">
                  <p className="text-6xl font-bold text-green-600 tracking-tight">$412.5k</p>
                  <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest mt-2">ANNUALIZED SAVINGS</p>
               </div>
            </div>
            <div className="h-64 flex items-end gap-4">
               {[40, 65, 30, 85, 45, 95, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-green-50 rounded-t-2xl relative group overflow-hidden border border-green-100/50">
                     <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i*0.1 }} className="absolute bottom-0 inset-x-0 bg-green-500 rounded-t-2xl group-hover:bg-green-600 transition-colors" />
                  </div>
               ))}
            </div>
            <div className="grid grid-cols-3 gap-8">
               <div className="p-6 bg-[#F8F7F4] rounded-2xl text-center"><p className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest mb-2">Agency Cost Saved</p><p className="text-xl font-bold text-[#111111]">$28k/mo</p></div>
               <div className="p-6 bg-[#F8F7F4] rounded-2xl text-center"><p className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest mb-2">Productivity Gain</p><p className="text-xl font-bold text-[#111111]">14.2%</p></div>
               <div className="p-6 bg-[#F8F7F4] rounded-2xl text-center"><p className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest mb-2">Talent Retention</p><p className="text-xl font-bold text-[#111111]">+11.5%</p></div>
            </div>
        </div>
      );
      case 'persona': return (
        <div className="p-16 space-y-12">
           <h3 className="text-4xl font-bold text-[#111111]">Persona <span className="text-amber-600">Forge.</span></h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">Persona ID Name</label>
                    <input type="text" placeholder="e.g. Tough CTO" className="w-full h-14 bg-[#F8F7F4] border border-[#EAEAEA] rounded-2xl px-6 font-bold text-sm outline-none focus:border-amber-600" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">Interrogation Style</label>
                    <div className="grid grid-cols-2 gap-4">
                       <button className="h-12 bg-amber-600 text-white rounded-xl text-[10px] font-bold uppercase transition-all">Socratic</button>
                       <button className="h-12 bg-[#F8F7F4] text-[#A19F9D] rounded-xl text-[10px] font-bold uppercase hover:text-[#111111] transition-all">Aggressive</button>
                    </div>
                 </div>
              </div>
              <div className="p-8 bg-[#111111] rounded-[32px] text-white flex flex-col justify-center text-center space-y-6">
                 <div className="w-16 h-16 bg-amber-600 rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold"><Zap /></div>
                 <p className="text-xs font-medium text-white/50 leading-relaxed px-4">"Ready to deploy new AI persona to the Global portal. Estimated setup time: 250ms."</p>
                 <button className="h-14 bg-white text-[#111111] rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl shadow-white/10 hover:bg-amber-600 hover:text-white transition-all">Initialize Forge</button>
              </div>
           </div>
        </div>
      );
      case 'message': return (
        <div className="p-16 space-y-10">
           <h3 className="text-4xl font-bold text-[#111111]">Strategic <span className="text-[#0078D4]">Recommendation.</span></h3>
           <div className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">Target Employee</label>
                 <div className="p-4 bg-[#F8F7F4] border border-[#EAEAEA] rounded-2xl flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">Global Selection (ALL)</span>
                    <ChevronRight size={16} />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">Strategic Brief</label>
                 <textarea placeholder="Type recommendation here..." className="w-full h-40 bg-white border-2 border-[#EAEAEA] rounded-[32px] p-8 font-medium text-sm outline-none focus:border-[#0078D4] transition-all resize-none shadow-av-sm"></textarea>
              </div>
              <button className="w-full h-16 bg-[#111111] text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#0078D4] transition-all"><Plus size={18} /> Dispatch Dashboard Push</button>
           </div>
        </div>
      );
      case 'alerts': return (
        <div className="p-16 space-y-10">
           <div className="flex justify-between items-center">
              <h3 className="text-4xl font-bold text-[#111111]">System <span className="text-[#FF9800]">Alerts.</span></h3>
              <span className="px-4 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-bold border border-amber-100 uppercase tracking-widest">4 Critical</span>
           </div>
           <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {[
                 { title: 'Anomaly Detected', desc: 'Token usage for Unit G4 exceeded 400% baseline.', time: '12m ago', color: 'text-red-500', bg: 'bg-red-50' },
                 { title: 'New Hire Sync', desc: '42 new profiles indexed from SuccessFactors.', time: '1h ago', color: 'text-blue-500', bg: 'bg-blue-50' },
                 { title: 'Benchmarking Ready', desc: 'Global Q1 talent metrics comparison finalized.', time: '4h ago', color: 'text-green-500', bg: 'bg-green-50' },
                 { title: 'API Sync Error', desc: 'Job board ingestion paused due to timeout.', time: '6h ago', color: 'text-amber-500', bg: 'bg-amber-50' },
              ].map(a => (
                 <div key={a.title} className="p-8 bg-white border border-[#EAEAEA] rounded-[32px] grid grid-cols-[1fr_auto] items-center gap-10 hover:border-[#FF9800]/30 transition-all cursor-pointer">
                    <div className="space-y-2">
                       <h4 className={`text-sm font-bold ${a.color} uppercase tracking-widest`}>{a.title}</h4>
                       <p className="text-xs font-semibold text-[#605E5C]">{a.desc}</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest whitespace-nowrap">{a.time}</span>
                 </div>
              ))}
           </div>
           <button className="w-full h-14 bg-[#F8F7F4] text-[#A19F9D] rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:text-[#111111] transition-all">Clear All History</button>
        </div>
      );
      default: return null;
    }
  };

  return (
    <div className="relative">
       <button onClick={onClose} className="absolute top-10 right-10 w-12 h-12 rounded-2xl bg-[#F8F7F4] flex items-center justify-center hover:bg-[#EAEAEA] transition-all z-10"><X size={20}/></button>
       {renderInner()}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  if (!isLoggedIn) {
    return <LoginView onLogin={() => setIsLoggedIn(true)} />;
  }

  const handleNavigate = (tab: string) => setActiveTab(tab);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView setActiveModal={setActiveModal} />;
      case 'insights': return <InsightsView setActiveModal={setActiveModal} />;
      case 'analytics': return <AnalyticsView setActiveModal={setActiveModal} />;
      case 'settings': return <SettingsView />;
      case 'notifications': return <NotificationsView />;
      default: return <DashboardView setActiveModal={setActiveModal} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F8F7F4] font-sans antialiased text-[#111111] overflow-hidden">
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 300, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="h-full bg-[#111111] border-r border-white/5 flex flex-col z-50 overflow-hidden shrink-0"
          >
            <div className="p-10 flex items-center gap-4 border-b border-white/5">
              <div className="w-12 h-12 bg-[#0078D4] rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,120,212,0.3)]">
                <Shield size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-widest uppercase">Aivora</h1>
                <p className="text-[10px] font-bold text-[#0078D4] uppercase tracking-widest mt-0.5">Corporate Admin</p>
              </div>
            </div>

            <nav className="flex-1 py-10">
              <SidebarItem icon={<LayoutDashboard size={18} />} label="Main Dashboard" active={activeTab === 'dashboard'} onClick={() => handleNavigate('dashboard')} />
              <SidebarItem icon={<Users size={18} />} label="Employee List" active={activeTab === 'insights'} onClick={() => handleNavigate('insights')} />
              <SidebarItem icon={<Repeat size={18} />} label="AI Usage" active={activeTab === 'analytics'} onClick={() => handleNavigate('analytics')} />
            </nav>

            <div className="p-8 border-t border-white/5 bg-white/5">
              <div className="mb-6 px-4">
                 <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.25em] mb-3">System Identity</p>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0078D4] to-[#005A9E] border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">HR</div>
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">Enterprise Admin</p>
                      <p className="text-[9px] font-semibold text-white/40 uppercase tracking-widest">Global Ops</p>
                    </div>
                 </div>
              </div>
                <button onClick={() => handleNavigate('settings')} className={`flex items-center gap-3 w-full px-4 py-4 rounded-xl transition-all text-[10px] font-bold uppercase tracking-[0.2em] group ${activeTab === 'settings' ? 'bg-[#0078D4] text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                <Settings size={16} className={activeTab === 'settings' ? '' : 'group-hover:rotate-45 transition-transform'} /> Account Controls
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-[#EAEAEA] flex items-center justify-between px-10 shrink-0 sticky top-0 z-40">
          <div className="flex items-center gap-8 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-10 h-10 flex items-center justify-center bg-[#F8F7F4] hover:bg-[#F3F2F1] border border-[#EAEAEA] rounded-xl transition-all group shadow-sm active:scale-95"
            >
              <Menu size={18} className="text-[#605E5C] group-hover:text-[#111111]" />
            </button>
            <div className="relative max-w-md w-full hidden lg:block group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A19F9D] group-focus-within:text-[#0078D4] transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search workforce intelligence..." 
                className="w-full pl-12 pr-4 py-2.5 bg-[#F8F7F4] border border-[#EAEAEA] focus:border-[#0078D4] focus:bg-white focus:ring-4 focus:ring-[#0078D4]/5 rounded-2xl text-[13px] outline-none transition-all font-semibold placeholder:text-[#A19F9D]"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
               <div onClick={() => setActiveModal('alerts')} className="w-10 h-10 flex items-center justify-center bg-[#F8F7F4] border border-[#EAEAEA] rounded-xl relative cursor-pointer hover:bg-white hover:border-[#0078D4]/20 transition-all group shadow-sm">
                  <Bell size={20} className="text-[#605E5C] group-hover:text-[#111111]" />
                  <span className="absolute top-2.5 right-2.5 w-4 h-4 bg-[#FF9800] text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white group-hover:scale-110 transition-transform shadow-md">4</span>
               </div>
            </div>
            
            <div className="flex items-center gap-4 pl-8 border-l border-[#EAEAEA]">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-[#111111] tracking-tight">Enterprise Console</div>
                <div className="text-[9px] font-bold text-[#0078D4] uppercase tracking-widest mt-0.5">ADMIN ACTIVE</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#0078D4] p-0.5 shadow-lg shadow-[#0078D4]/20">
                 <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center text-[10px] font-bold text-[#0078D4] border-2 border-[#0078D4]">HQ</div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="h-full w-full"
             >
               {renderContent()}
             </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Global Feature Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[200]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-white rounded-[48px] shadow-2xl z-[201] overflow-hidden flex flex-col"
            >
               <ModalContent type={activeModal} onClose={() => setActiveModal(null)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function SidebarItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center gap-4 w-full px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${active ? 'bg-[#0078D4] text-white' : 'text-[#605E5C] hover:text-white hover:bg-white/5'}`}
    >
      <span className={active ? 'text-white' : 'text-inherit'}>{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {active && (
        <motion.div layoutId="activeInd" className="absolute right-0 w-1 h-6 bg-white/40 rounded-l-full" />
      )}
    </button>
  );
}

function StatCard({ label, value, change, icon: Icon, color, bg }: any) {
  return (
    <div className="av-card group hover:scale-[1.05] transition-all p-10 bg-white border border-[#EAEAEA] rounded-[32px] shadow-av-sm">
       <div className="flex justify-between items-start mb-8">
          <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center ${color} shadow-sm border border-[#EAEAEA]`}>
             <Icon size={20} />
          </div>
          {change && <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border border-green-100">{change}</span>}
       </div>
       <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.25em] mb-1">{label}</p>
       <p className="text-4xl font-bold text-[#111111] tracking-tight">{value}</p>
    </div>
  );
}

function DashboardView({ setActiveModal }: any) {
  return (
    <div className="h-full overflow-y-auto p-12 custom-scrollbar bg-[#F8F7F4] pb-32">
       <div className="max-w-[1600px] mx-auto space-y-16">
          <header className="flex flex-col xl:flex-row justify-between items-start gap-16">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#0078D4]" />
                 <span className="text-[11px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">Admin Portal</span>
              </div>
              <h2 className="text-6xl font-bold text-[#111111] tracking-tight leading-[1.05]">
                Manage <br/><span className="text-[#0078D4]">Your Team</span>
              </h2>
              <p className="text-lg font-medium text-[#605E5C] leading-relaxed max-w-2xl">
                See how your employees are doing, track their interviews, and monitor how they are using AI tools.
              </p>
            </div>

            <div className="relative group shrink-0">
               <div className="absolute inset-0 bg-[#0078D4]/15 blur-[60px] rounded-full group-hover:bg-[#0078D4]/25 transition-all duration-700 animate-pulse"></div>
               <div className="relative w-80 h-80 bg-white rounded-full shadow-av-lg border border-[#EAEAEA] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105">
                 <svg className="w-64 h-64 -rotate-90">
                   <circle cx="128" cy="128" r="110" fill="transparent" stroke="#F1F0EC" strokeWidth="16" />
                   <motion.circle 
                     cx="128" cy="128" r="110" fill="transparent" stroke="#0078D4" strokeWidth="16" strokeDasharray={691} 
                     initial={{ strokeDashoffset: 691 }}
                     animate={{ strokeDashoffset: 691 - (691 * 84) / 100 }}
                     transition={{ duration: 2 }}
                     strokeLinecap="round"
                   />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-7xl font-bold text-[#111111] tracking-tight">84.2</span>
                    <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.4em] mt-2">Team Health</p>
                 </div>
               </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {analyticStats.map((stat, i) => (
               <StatCard key={i} {...stat} change="+12%" />
             ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_450px] gap-12">
             <div className="av-card p-10 bg-white border border-[#EAEAEA] rounded-[32px]">
                <h3 className="text-2xl font-bold text-[#111111] tracking-tight mb-12">Interview Activity</h3>
                <div className="h-[450px]">
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart 
                        data={[
                          { name: 'Mon', high: 85, activity: 45 },
                          { name: 'Tue', high: 88, activity: 52 },
                          { name: 'Wed', high: 92, activity: 48 },
                          { name: 'Thu', high: 90, activity: 61 },
                          { name: 'Fri', high: 95, activity: 55 },
                          { name: 'Sat', high: 80, activity: 30 },
                          { name: 'Sun', high: 75, activity: 25 },
                        ]}
                        margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
                      >
                       <defs>
                          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#0078D4" stopOpacity={0.15}/>
                             <stop offset="95%" stopColor="#0078D4" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAEAEA" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fill: '#A19F9D', fontWeight: 700 }} 
                          dy={15} 
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fill: '#A19F9D', fontWeight: 700 }} 
                          domain={[0, 100]}
                        />
                       <Tooltip contentStyle={{ borderRadius: '24px', border: '1px solid #EAEAEA', boxShadow: '0 12px 32px rgba(0,0,0,0.08)', fontFamily: 'Montserrat', fontWeight: 700, fontSize: 12 }} />
                        <Area 
                          type="monotone" 
                          dataKey="high" 
                          stroke="#0078D4" 
                          strokeWidth={4} 
                          fillOpacity={1} 
                          fill="url(#blueGradient)" 
                          animationDuration={2000}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="activity" 
                          stroke="#111111" 
                          strokeWidth={2} 
                          strokeDasharray="6 6" 
                          fill="transparent" 
                        />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>

               <div className="mt-16 pt-12 border-t border-[#EAEAEA] grid grid-cols-3 gap-12">
                  {[
                    { label: 'Avg Sentiment', value: 'High Agency', sub: '+14% Week over Week' },
                    { label: 'Completion Rate', value: '94.2%', sub: 'Target: 95.0%' },
                    { label: 'Top Performer', value: 'Engineering HQ', sub: '243 Interviews Transcribed' }
                  ].map((metric, idx) => (
                    <div key={idx} className="space-y-2">
                       <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">{metric.label}</p>
                       <p className="text-xl font-bold text-[#111111]">{metric.value}</p>
                       <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
                          <p className="text-[9px] font-bold text-[#605E5C] uppercase tracking-wider">{metric.sub}</p>
                       </div>
                    </div>
                  ))}
               </div>
           </div>

           <div className="space-y-12">
               <div className="av-card bg-white border border-[#EAEAEA] p-10 relative overflow-hidden group rounded-[32px] shadow-av-sm">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0078D4]/5 blur-[100px] pointer-events-none group-hover:bg-[#0078D4]/10 transition-all duration-700"></div>
                  <div className="relative z-10 space-y-8">
                     <div className="w-16 h-16 bg-[#F8F7F4] rounded-3xl flex items-center justify-center border border-[#EAEAEA] shadow-sm group-hover:scale-110 transition-transform">
                        <Zap size={28} className="text-[#0078D4]" />
                     </div>
                     <h4 className="text-2xl font-bold tracking-tight text-[#111111]">AI Token Credits</h4>
                     <p className="text-sm font-medium text-[#605E5C] leading-relaxed">Remaining Enterprise Pool: <span className="text-[#111111] font-bold">2.1M Tokens</span> • Strategic depletion: 14 days</p>
                     <div className="grid grid-cols-2 gap-4">
                        <button onClick={() => setActiveModal('refill')} className="h-14 bg-[#0078D4] text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#0078D4]/20 hover:bg-[#005A9E] transition-all">
                           Governance Logic
                        </button>
                        <button onClick={() => setActiveModal('roi')} className="h-14 bg-[#F8F7F4] text-[#111111] border border-[#EAEAEA] rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">
                           ROI Pulse
                        </button>
                     </div>
                   </div>
                 </div>

              <div className="av-card p-10 bg-white border border-[#EAEAEA] rounded-[32px]">
                  <h4 className="text-xl font-bold text-[#111111] tracking-tight mb-8">Department Usage Limits</h4>
                 <div className="space-y-10">
                    {[
                       { name: 'Engineering', value: 92, target: 95, color: 'bg-purple-600' },
                       { name: 'Marketing', value: 45, target: 60, color: 'bg-blue-600' },
                       { name: 'Product Ops', value: 78, target: 80, color: 'bg-[#0078D4]' },
                       { name: 'Sales Excellence', value: 25, target: 50, color: 'bg-green-600' },
                    ].map(skill => (
                       <div key={skill.name} className="space-y-3">
                          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#111111]">
                             <span>{skill.name}</span>
                             <span className="text-[#0078D4]">{skill.value}% Limit</span>
                          </div>
                          <div className="h-2 bg-[#F8F7F4] rounded-full overflow-hidden relative shadow-inner">
                             <motion.div 
                                initial={{ width: 0 }} 
                                animate={{ width: `${skill.value}%` }} 
                                transition={{ duration: 1.5, ease: "circOut" }}
                                className={`absolute inset-y-0 ${skill.color} rounded-full`} 
                             />
                             <div className="absolute inset-y-0 bg-[#111111]/10 rounded-full" style={{ width: `${skill.target}%` }} />
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function InsightsView({ setActiveModal }: any) {
  const [selectedEmp, setSelectedEmp] = useState<any>(null);

  return (
    <div className="h-full overflow-y-auto p-12 custom-scrollbar bg-[#F8F7F4] pb-32 relative">
       <div className="max-w-[1400px] mx-auto space-y-12">
          <header>
             <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#0078D4]" />
                <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">General Employee Data</span>
             </div>
             <h2 className="text-5xl font-bold text-[#111111] tracking-tight leading-tight">Employee <span className="text-[#0078D4]">List.</span></h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <div className="av-card p-10 col-span-2 bg-white border border-[#EAEAEA] rounded-[32px]">
                <div className="flex justify-between items-center mb-10">
                   <h3 className="text-xl font-bold text-[#111111] tracking-tight">Team Breakdown</h3>
                   <button className="!bg-[#F8F7F4] py-2 px-4 rounded-xl text-[9px] font-bold uppercase tracking-widest border border-[#EAEAEA]">VIEW ALL TEAMS</button>
                </div>
                <div className="h-[300px]">
                   <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={departmentData}>
                         <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#A19F9D', fontWeight: 700 }} />
                         <Tooltip cursor={{ fill: '#F8F7F4' }} contentStyle={{ borderRadius: '16px', border: 'none' }} />
                         <Bar dataKey="count" radius={[12, 12, 0, 0]} barSize={40}>
                            {departmentData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                         </Bar>
                      </BarChart>
                   </ResponsiveContainer>
                </div>
             </div>
             
             <div className="av-card p-10 flex flex-col items-center justify-center text-center space-y-8 bg-white border border-[#EAEAEA] rounded-[32px]">
                <div className="w-48 h-48 relative">
                   <RePieChart width={192} height={192}>
                      <Pie data={departmentData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="count">
                         {departmentData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                      </Pie>
                   </RePieChart>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-[#111111]">1.2k</span>
                      <span className="text-[8px] font-bold text-[#A19F9D] uppercase tracking-widest">Total Staff</span>
                   </div>
                </div>
                <div>
                   <h4 className="text-lg font-bold text-[#111111]">Healthy Diversification</h4>
                   <p className="text-xs font-medium text-[#605E5C] mt-2">Optimal balance across Engineering and Product units.</p>
                </div>
             </div>
          </div>

          <div className="av-card !p-0 overflow-hidden bg-white border border-[#EAEAEA] rounded-[32px]">
             <div className="p-10 bg-[#F8F7F4]/50 border-b border-[#EAEAEA] flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">Active Employee Transition Queue</h3>
                <div className="flex gap-4">
                   <div className="relative group">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A19F9D]" size={14} />
                      <input type="text" placeholder="Filter talent..." className="pl-10 pr-4 py-2 bg-white border border-[#EAEAEA] rounded-xl text-[10px] font-bold outline-none focus:border-[#0078D4] transition-all" />
                   </div>
                   <button className="bg-white py-2 px-4 rounded-xl text-[9px] font-bold uppercase tracking-widest border border-[#EAEAEA] flex items-center gap-2"><Filter size={14}/> Sort</button>
                </div>
             </div>
             <table className="w-full">
                 <tbody className="divide-y divide-[#F8F7F4]">
                    {[
                       { name: 'David Kim', role: 'Sr. Backend Engineer', target: 'Cloud Ops', health: 92, status: 'Interviewing', date: '12m ago', color: 'text-blue-600', bg: 'bg-blue-50' },
                       { name: 'Elena Vance', role: 'Product Manager', target: 'Strategy', health: 85, status: 'Shortlisted', date: '1h ago', color: 'text-purple-600', bg: 'bg-purple-50' },
                       { name: 'Isaac Clarke', role: 'Security Analyst', target: 'Defensive Ops', health: 98, status: 'Simulated', date: '2h ago', color: 'text-amber-600', bg: 'bg-amber-50' },
                       { name: 'Gordon Freeman', role: 'Research Lead', target: 'Materials Unit', health: 76, status: 'Applied', date: '4h ago', color: 'text-gray-600', bg: 'bg-gray-100' },
                    ].map((emp, i) => (
                       <tr key={i} onClick={() => setSelectedEmp(emp)} className="hover:bg-[#0078D4]/[0.02] cursor-pointer transition-all group">
                          <td className="px-10 py-8">
                             <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-[#F8F7F4] border border-[#EAEAEA] flex items-center justify-center text-[10px] font-bold text-[#111111] group-hover:bg-[#0078D4] group-hover:text-white transition-all">{emp.name.split(' ').map(n=>n[0]).join('')}</div>
                                <div>
                                   <p className="text-sm font-bold text-[#111111]">{emp.name} <ChevronRight size={12} className="inline opacity-0 group-hover:opacity-100 ml-1 transition-all" /></p>
                                   <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest mt-0.5">{emp.role}</p>
                                </div>
                             </div>
                          </td>
                          <td className="px-10 py-8">
                             <div className="flex items-center gap-3">
                                <ArrowRight size={14} className="text-[#0078D4]" />
                                <span className="text-xs font-bold text-[#605E5C]">{emp.target}</span>
                             </div>
                          </td>
                          <td className="px-10 py-8 space-y-2">
                             <div className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${emp.bg} ${emp.color} border border-current opacity-70`}>
                                {emp.status}
                             </div>
                             <div className="flex items-center gap-4">
                                <div className="flex-1 h-1 bg-[#F8F7F4] rounded-full overflow-hidden max-w-[80px]">
                                   <div className="h-full bg-[#0078D4]" style={{ width: `${emp.health}%` }} />
                                </div>
                                 <span className="text-[10px] font-bold text-[#111111]">{emp.health}% Progress</span>
                             </div>
                          </td>
                          <td className="px-10 py-8 text-right text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">{emp.date}</td>
                       </tr>
                    ))}
                 </tbody>
             </table>
          </div>
       </div>

       {/* Employee Detail Sidebar Overlay */}
       <AnimatePresence>
         {selectedEmp && (
           <>
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedEmp(null)}
               className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
             />
             <motion.div 
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
               className="fixed right-0 top-0 h-full w-[450px] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.1)] z-[101] overflow-y-auto custom-scrollbar flex flex-col pt-24"
             >
                <div className="p-10 space-y-12">
                   <div className="flex justify-between items-start">
                      <div className="flex items-center gap-6">
                         <div className="w-20 h-20 rounded-[28px] bg-[#111111] text-white flex items-center justify-center text-2xl font-bold shadow-2xl">
                            {selectedEmp.name.split(' ').map((n:any)=>n[0]).join('')}
                         </div>
                         <div>
                            <h3 className="text-2xl font-bold text-[#111111] tracking-tight">{selectedEmp.name}</h3>
                            <p className="text-sm font-bold text-[#0078D4] uppercase tracking-widest mt-1">{selectedEmp.role}</p>
                         </div>
                      </div>
                      <button onClick={() => setSelectedEmp(null)} className="w-10 h-10 rounded-xl bg-[#F8F7F4] flex items-center justify-center hover:bg-[#EAEAEA] transition-all">
                         <X size={18} />
                      </button>
                   </div>

                   <div className="space-y-8">
                       <div className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
                         <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">Individual Controls</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                         <button onClick={() => setActiveModal('risk')} className="h-14 bg-red-50 text-red-600 rounded-2xl text-[10px] font-bold uppercase tracking-widest border border-red-100 hover:bg-red-100 transition-all">AI Risk Check</button>
                         <button onClick={() => setActiveModal('gap')} className="h-14 bg-blue-50 text-[#0078D4] rounded-2xl text-[10px] font-bold uppercase tracking-widest border border-blue-100 hover:bg-blue-100 transition-all">Skill Gap</button>
                      </div>

                      <button onClick={() => setActiveModal('message')} className="w-full h-14 bg-[#F8F7F4] border border-[#EAEAEA] text-[#111111] rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-inner group">
                         Notify Dashboard
                      </button>

                      {/* Service Toggles */}
                      <div className="space-y-4">
                         <div className="flex items-center justify-between p-5 bg-white border border-[#EAEAEA] rounded-2xl">
                            <div className="flex items-center gap-4">
                               <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center border border-purple-100"><Mic size={18} /></div>
                               <span className="text-xs font-bold text-[#111111]">Live Mockup Access</span>
                            </div>
                            <div className="w-12 h-6 bg-[#107C10] rounded-full relative p-1 cursor-pointer"><div className="w-4 h-4 bg-white rounded-full float-right" /></div>
                         </div>
                         <div className="flex items-center justify-between p-5 bg-white border border-[#EAEAEA] rounded-2xl">
                            <div className="flex items-center gap-4">
                               <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center border border-amber-100"><FileText size={18} /></div>
                               <span className="text-xs font-bold text-[#111111]">Resume Builder Access</span>
                            </div>
                            <div className="w-12 h-6 bg-[#107C10] rounded-full relative p-1 cursor-pointer"><div className="w-4 h-4 bg-white rounded-full float-right" /></div>
                         </div>
                      </div>
                   </div>

                   <div className="pt-8 border-t border-[#F8F7F4]">
                      <div className="flex items-center justify-between mb-8">
                         <h4 className="text-sm font-bold text-[#111111] uppercase tracking-widest">Recent Activity</h4>
                         <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-widest">LIVE DATA</span>
                      </div>
                      <div className="space-y-8">
                         {[
                             { action: 'Mock Interview Conducted', score: '92/100', time: '12m ago', icon: <Mic size={12}/>, color: 'text-purple-600', modal: 'transcript' },
                             { action: 'Resume Iteration V4', score: 'GOLD', time: '2h ago', icon: <FileText size={12}/>, color: 'text-amber-600', modal: 'roi' },
                             { action: 'Token Pool Injection', score: '+500', time: 'Yesterday', icon: <Zap size={12}/>, color: 'text-blue-600', modal: 'refill' },
                          ].map((item, i) => (
                             <div key={i} onClick={() => setActiveModal(item.modal as any)} className="flex gap-4 group cursor-pointer hover:bg-[#F8F7F4] p-3 -mx-3 rounded-2xl transition-all">
                                <div className={`w-8 h-8 rounded-xl bg-[#F8F7F4] flex items-center justify-center ${item.color} border border-[#EAEAEA] group-hover:scale-110 transition-transform`}>{item.icon}</div>
                               <div className="flex-1">
                                  <div className="flex justify-between items-center">
                                     <p className="text-xs font-bold text-[#111111]">{item.action}</p>
                                     <span className="text-[10px] font-bold text-[#A19F9D]">{item.time}</span>
                                  </div>
                                  <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${item.color}`}>{item.score}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>

                   <button className="w-full h-16 bg-[#111111] text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] shadow-xl hover:bg-[#0078D4] transition-all">Freeze Profile Account</button>
                </div>
             </motion.div>
           </>
         )}
       </AnimatePresence>
    </div>
  );
}

function AnalyticsView({ setActiveModal }: any) {
  return (
     <div className="h-full overflow-y-auto p-12 custom-scrollbar bg-[#F8F7F4] pb-32">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
             <div>
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-2 h-2 rounded-full bg-[#0078D4]" />
                   <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">AI Usage Stats</span>
                </div>
                <h2 className="text-5xl font-bold text-[#111111] tracking-tight leading-tight">AI <span className="text-[#0078D4]">Usage.</span></h2>
             </div>
             <div className="flex gap-4">
              <div className="flex gap-4">
                 <button onClick={() => setActiveModal('roi')} className="bg-white h-12 px-6 rounded-2xl flex items-center gap-2 shadow-sm border border-[#EAEAEA] font-bold text-[10px] uppercase tracking-widest hover:bg-[#F8F7F4] transition-all"><Download size={16} /> Economic ROI</button>
                 <button onClick={() => setActiveModal('persona')} className="bg-[#111111] text-white h-12 px-8 rounded-2xl shadow-xl shadow-black/10 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#0078D4] transition-all">Persona Forge</button>
              </div>
</div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {analyticStats.map((stat, i) => <StatCard key={i} {...stat} />)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="av-card p-10 bg-[#111111] text-white border-none rounded-[32px] overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0078D4] blur-[100px] opacity-10 group-hover:opacity-30 transition-all"></div>
                <h3 className="text-xl font-bold tracking-tight mb-8">AI Token Economics (Cost/Action)</h3>
                <div className="space-y-6">
                   {[
                      { label: 'Live Mockup Interview', cost: '500 Tokens', color: 'text-purple-400' },
                      { label: 'AI Resume Generation', cost: '150 Tokens', color: 'text-amber-400' },
                      { label: 'Workforce Simulation', cost: '2,000 Tokens', color: 'text-blue-400' },
                      { label: 'Career Path Mapping', cost: '50 Tokens', color: 'text-gray-400' },
                   ].map(item => (
                      <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-4">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{item.label}</span>
                         <span className={`text-xs font-bold ${item.color}`}>{item.cost}</span>
                      </div>
                   ))}
                </div>
             </div>
             
             <div className="av-card p-10 bg-white border border-[#EAEAEA] rounded-[32px]">
                <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-8">Service Utilization Split</h3>
                <div className="h-[200px]">
                   <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                         { name: 'Interviews', count: 312, fill: '#8884d8' },
                         { name: 'Resumes', count: 956, fill: '#ffc658' },
                         { name: 'Simulations', count: 48, fill: '#0078D4' },
                      ]}>
                         <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 700 }} />
                         <Bar dataKey="count" radius={[8, 8, 0, 0]} />
                      </BarChart>
                   </ResponsiveContainer>
                </div>
             </div>
          </div>

          <div className="av-card p-10 bg-white border border-[#EAEAEA] rounded-[32px]">
             <div className="flex justify-between items-center mb-12">
                <div>
                   <h3 className="text-2xl font-bold text-[#111111] tracking-tight">Enterprise Velocity</h3>
                   <p className="text-xs font-semibold text-[#A19F9D] mt-1 uppercase tracking-widest">Aggregate Transition Speeds across 12 Units</p>
                </div>
                <div className="flex gap-8">
                   <div className="text-right">
                      <p className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest">AVG LEAD TIME</p>
                      <p className="text-xl font-bold text-[#111111]">14.2 Days</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest">SUCCESS RATE</p>
                      <p className="text-xl font-bold text-[#0078D4]">92.8%</p>
                   </div>
                </div>
             </div>
             <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={mobilityData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAEAEA" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#A19F9D', fontWeight: 700 }} dy={15} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#A19F9D', fontWeight: 700 }} />
                      <Tooltip />
                      <Area type="step" dataKey="value" stroke="#0078D4" strokeWidth={3} fill="#0078D4" fillOpacity={0.05} />
                      <Area type="step" dataKey="target" stroke="#111111" strokeWidth={1} strokeDasharray="5 5" fill="transparent" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>
     </div>
  );
}

function LoginView({ onLogin }: any) {
  return (
     <div className="h-screen w-screen bg-[#F8F7F4] flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0078D4]/5 blur-[150px] -mr-96 -mt-96 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0078D4]/5 blur-[120px] -ml-64 -mb-64"></div>
        
        <div className="w-full max-w-[480px] av-card !p-16 bg-white border border-[#EAEAEA] rounded-[48px] shadow-2xl relative z-10">
           <div className="text-center space-y-8 mb-16">
              <div className="w-24 h-24 bg-[#0078D4] rounded-[36px] mx-auto flex items-center justify-center text-white shadow-2xl shadow-[#0078D4]/30 rotate-12 transition-transform duration-700">
                 <Target size={48} />
              </div>
              <div className="space-y-3">
                 <h1 className="text-4xl font-bold text-[#111111] tracking-tight">Admin <span className="text-[#0078D4]">Portal.</span></h1>
                 <p className="text-sm font-medium text-[#A19F9D] brightness-90">Secure Access for AIVORA Corporate Founders</p>
              </div>
           </div>

           <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest px-1">Email Address</label>
                    <input type="email" placeholder="admin@aivora.com" className="w-full h-14 bg-[#F8F7F4]/50 border border-[#EAEAEA] rounded-2xl px-6 font-bold text-sm outline-none focus:border-[#0078D4] transition-all" defaultValue="admin@aivora.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest px-1">Access Key</label>
                    <input type="password" placeholder="••••••••" className="w-full h-14 bg-[#F8F7F4]/50 border border-[#EAEAEA] rounded-2xl px-6 font-bold text-sm outline-none focus:border-[#0078D4] transition-all" defaultValue="••••••••" />
                 </div>
              </div>

              <button type="submit" className="w-full h-16 bg-[#111111] text-white rounded-2xl font-bold text-[12px] uppercase tracking-[0.3em] shadow-xl shadow-black/10 hover:bg-[#0078D4] transition-all duration-500 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                 Initialize Session <ChevronRight size={18} />
              </button>

              <div className="text-center pt-8">
                 <p className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest leading-loose">
                    Protected by Biometric Intelligence<br/>
                    &copy; 2026 AIVORA Systems Inc.
                 </p>
              </div>
           </form>
        </div>
     </div>
  );
}




function SettingsView() {
  const [activeSub, setActiveSub] = useState('profile');
  return (
     <div className="h-full overflow-y-auto p-12 custom-scrollbar bg-[#F8F7F4] pb-32">
        <div className="max-w-[1000px] mx-auto space-y-12">
           <header>
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 rounded-full bg-[#0078D4]" />
                 <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">Enterprise Governance</span>
              </div>
              <h2 className="text-5xl font-bold text-[#111111] tracking-tight leading-tight">Admin <span className="text-[#0078D4]">Controls.</span></h2>
           </header>

           <div className="flex gap-10 border-b border-[#EAEAEA] pb-1">
              {['profile', 'security', 'notifications', 'services', 'subscription'].map(s => (
                <button key={s} onClick={()=>setActiveSub(s)} className={`pb-6 px-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${activeSub === s ? 'text-[#0078D4]' : 'text-[#A19F9D] hover:text-[#111111]'}`}>
                   {s === 'services' ? 'AI Products' : s}
                   {activeSub === s && <motion.div layoutId="subInd" className="absolute bottom-0 left-0 right-0 h-1 bg-[#0078D4] shadow-[0_4px_15px_rgba(0,120,212,0.4)]" />}
                </button>
              ))}
           </div>

           <div className="pt-8">
              {activeSub === 'profile' && (
                 <div className="av-card p-12 space-y-10 bg-white border border-[#EAEAEA] rounded-[32px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <InputGroup label="ADMIN LEGAL NAME" val="Enterprise Executive" />
                       <InputGroup label="OFFICIAL EMAIL" val="admin@aivora.hq" />
                       <InputGroup label="CORPORATE UNIT" val="Global Talent Operations" />
                       <InputGroup label="ACCESS CLEARANCE" val="Level 04 - Strategic" />
                    </div>
                    <div className="pt-8 border-t border-[#F8F7F4] flex justify-end gap-5">
                       <button className="bg-[#F8F7F4] py-3 px-8 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-[#EAEAEA]">Cancel</button>
                       <button className="bg-[#0078D4] text-white py-3 px-8 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-[#0078D4]/20">Update Records</button>
                    </div>
                 </div>
              )}
              {activeSub === 'security' && (
                 <div className="space-y-8">
                    <SecurityItem icon={<ShieldCheck size={24} />} title="Multi-Factor Auth" desc="Biometric + OTP required for ROI exports." active />
                    <SecurityItem icon={<Lock size={24} />} title="IP Whitelisting" desc="Restrict console access to Corporate VPN nodes." />
                    <SecurityItem icon={<Eye size={24} />} title="Audit Logging" desc="Detailed activity logs for compliance units." active />
                 </div>
              )}
              {activeSub === 'notifications' && (
                 <div className="av-card p-12 space-y-8 bg-white border border-[#EAEAEA] rounded-[32px]">
                    <NotificationToggle title="Threshold Alerts" desc="Notify when mobility ROI drops below 10x." />
                    <NotificationToggle title="Queue Surge" desc="Alert when transition requests exceed 50/hour." defaultOn />
                    <NotificationToggle title="Compliance Audit" desc="Weekly PDF export of workforce transitions." defaultOn />
                 </div>
              )}
               {activeSub === 'services' && (
                  <div className="av-card p-12 space-y-8 bg-white border border-[#EAEAEA] rounded-[32px] animate-in fade-in slide-in-from-bottom-2 duration-500">
                     <h3 className="text-xl font-bold text-[#111111] mb-8 uppercase tracking-widest border-b pb-4">Product Feature Gates</h3>
                     <NotificationToggle title="Live Mockup Interviews" desc="Allow staff to schedule AI-driven role simulations." defaultOn />
                     <NotificationToggle title="Smart Resume Builder" desc="Enable automated CV generation and career indexing." defaultOn />
                     <NotificationToggle title="Skill Gap Analysis" desc="Automatic token expenditure for departmental audits." />
                     <div className="pt-8 border-t border-[#F8F7F4] flex justify-end gap-5">
                       <button className="bg-[#0078D4] text-white py-3 px-8 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-[#0078D4]/20">Save Permissions</button>
                    </div>
                  </div>
               )}
               {activeSub === 'subscription' && (
                 <div className="av-card bg-[#111111] text-white border-none p-12 flex flex-col items-center text-center space-y-8 relative overflow-hidden group rounded-[40px]">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#0078D4] blur-[150px] opacity-20"></div>
                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-[#0078D4] shadow-2xl"><CreditCard size={32} /></div>
                    <div>
                       <h3 className="text-3xl font-bold tracking-tight">Enterprise Global</h3>
                       <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mt-2">Annual Billing • Managed by Finance</p>
                    </div>
                    <div className="flex gap-12 border-y border-white/5 w-full py-8 justify-center">
                       <div className="text-center">
                          <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1">Status</p>
                          <p className="text-xl font-bold text-green-400">PERFECT</p>
                       </div>
                       <div className="text-center">
                          <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1">Seats</p>
                          <p className="text-xl font-bold text-white">UNLIMITED</p>
                       </div>
                       <div className="text-center">
                          <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1">Next Swap</p>
                          <p className="text-xl font-bold text-white">APR 2026</p>
                       </div>
                    </div>
                    <button className="w-full h-14 bg-[#0078D4] text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#111111] transition-all shadow-2xl shadow-[#0078D4]/30">Contact Account Representative</button>
                 </div>
              )}
           </div>
        </div>
     </div>
  );
}

function InputGroup({ label, val }: any) {
  return (
    <div className="space-y-4">
       <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.3em] ml-2">{label}</label>
       <input type="text" defaultValue={val} className="w-full bg-[#F8F7F4] border-none p-5 rounded-[24px] font-bold text-base outline-none focus:ring-4 focus:ring-[#0078D4]/5 transition-all shadow-sm font-sans" />
    </div>
  );
}

function SecurityItem({ icon, title, desc, active = false }: any) {
  return (
    <div className="av-card flex items-center justify-between p-8 group hover:border-[#0078D4]/20 transition-all cursor-pointer bg-white border border-[#EAEAEA] rounded-[32px]">
       <div className="flex items-center gap-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${active ? 'bg-[#0078D4] text-white border-[#0078D4]' : 'bg-[#F8F7F4] text-[#A19F9D] border-[#EAEAEA]'}`}>
             {icon}
          </div>
          <div>
             <h4 className="text-lg font-bold text-[#111111]">{title}</h4>
             <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest mt-1 group-hover:text-[#0078D4] transition-colors">{desc}</p>
          </div>
       </div>
       <div className={`w-14 h-7 rounded-full relative p-1 transition-all duration-500 ${active ? 'bg-[#0078D4]' : 'bg-[#EAEAEA]'}`}>
          <motion.div animate={{ x: active ? 28 : 0 }} className="w-5 h-5 bg-white rounded-full shadow-lg" />
       </div>
    </div>
  );
}

function NotificationToggle({ title, desc, defaultOn = false }: any) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between p-6 hover:bg-[#F8F7F4] rounded-[24px] border border-transparent hover:border-[#EAEAEA] transition-all group">
       <div>
          <h5 className="text-base font-bold text-[#111111] group-hover:text-[#0078D4] transition-colors">{title}</h5>
          <p className="text-xs font-medium text-[#605E5C] mt-1">"{desc}"</p>
       </div>
       <div 
          onClick={()=>setOn(!on)}
          className={`w-14 h-7 rounded-full relative p-1 cursor-pointer transition-all duration-500 ${on ? 'bg-[#0078D4]' : 'bg-[#EAEAEA]'}`}
        >
           <motion.div animate={{ x: on ? 28 : 0 }} className="w-5 h-5 bg-white rounded-full shadow-lg" />
        </div>
    </div>
  );
}

function NotificationsView() {
  const alerts = [
    { title: "ROI Anomalies Detected", unit: "Finance & Ops", msg: "Strategic ROI has dipped below 11x in the APAC region. Immediate audit recommended.", time: "2m ago", priority: "CRITICAL" },
    { title: "Compliance Check Passed", unit: "Legal Unit", msg: "Quarterly workforce transition audit successfully verified and locked for record-keeping.", time: "1h ago", priority: "NORMAL" },
    { title: "Global Talent Surge", unit: "North America Division", msg: "Engineering readiness has increased by 14.2% following the latest simulation wave.", time: "4h ago", priority: "HIGH" },
  ];
  return (
     <div className="h-full overflow-y-auto p-12 custom-scrollbar bg-[#F8F7F4] pb-32">
        <div className="max-w-[1000px] mx-auto space-y-12">
           <header className="flex justify-between items-end gap-12 pb-12 border-b border-[#EAEAEA]">
              <div>
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#0078D4]" />
                    <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">Active Command Stream</span>
                 </div>
                  <h2 className="text-6xl font-bold text-[#111111] tracking-tight">System <span className="text-[#0078D4]">Updates.</span></h2>
              </div>
              <button className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest hover:text-[#0078D4] transition-all flex items-center gap-2"><CheckCircle size={14}/> Dispatch All</button>
           </header>

           <div className="space-y-6">
              {alerts.map((a, i) => (
                 <div key={i} className={`av-card group hover:border-[#0078D4]/20 transition-all p-10 flex gap-10 items-start relative overflow-hidden bg-white border border-[#EAEAEA] rounded-[32px] ${a.priority === 'CRITICAL' ? 'border-l-4 border-[#D13438]' : ''}`}>
                    <div className={`w-16 h-16 rounded-[28px] flex items-center justify-center shadow-xl shrink-0 group-hover:scale-105 transition-transform ${a.priority === 'CRITICAL' ? 'bg-[#D13438] text-white' : 'bg-white text-[#111111] border border-[#EAEAEA]'}`}>
                       <BellRing size={24} />
                    </div>
                    <div className="space-y-4 flex-1">
                       <div className="flex justify-between">
                          <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${a.priority === 'CRITICAL' ? 'bg-[#D13438]/10 text-[#D13438]' : 'bg-[#F8F7F4] text-[#A19F9D]'}`}>{a.priority} STATUS</span>
                          <span className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">{a.time}</span>
                       </div>
                       <h4 className="text-2xl font-bold text-[#111111] group-hover:text-[#0078D4] transition-colors tracking-tight">{a.title}</h4>
                       <p className="text-sm font-medium text-[#605E5C] leading-relaxed max-w-2xl">"{a.msg}"</p>
                       <div className="flex gap-6 pt-6">
                          <button className="bg-[#0078D4] text-white py-2 px-8 rounded-xl text-[9px] font-bold uppercase tracking-widest shadow-lg shadow-[#0078D4]/20">EXECUTE AUDIT</button>
                          <button className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest hover:text-[#111111] transition-all">SNOOZE</button>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
     </div>
  );
}

