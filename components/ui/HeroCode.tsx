const HeroCode = () => {
  return (
    <div aria-hidden="true" className="relative hidden lg:block">
      <div className="rounded-2xl p-6 w-full bg-gradient-to-b from-sky-800 to-gray-800 dark:from-neutral-900 dark:to-gray-900">
        <div className="flex space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
          <code>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-sky-400">developer</span> = {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">name</span>:{" "}
            <span className="text-amber-300">{`'Milad'`}</span>,
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">role</span>:{" "}
            <span className="text-amber-300">{`'Full Stack Developer'`}</span>,
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">skills</span>: {"["}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-300">{`'JavaScript'`}</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-300">{`'React'`}</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-300">{`'Node.js'`}</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-300">{`'UI/UX Design'`}</span>
            <br />
            &nbsp;&nbsp;{"],"}
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">contact</span>: {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">email</span>
            : <span className="text-amber-300">{`'milad@gmail.com'`}</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-400">website</span>:{" "}
            <span className="text-amber-300">{`'micodex.com'`}</span>
            <br />
            &nbsp;&nbsp;{"}"}
            <br />
            {"};"}
            <br />
            <br />
            <span className="text-purple-400">function</span>{" "}
            <span className="text-sky-400">buildProject</span>({"requirements"}){" "}
            {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-purple-400">return</span>{" "}
            <span className="text-emerald-400">transformIdeas</span>(
            {"requirements"})
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;.
            <span className="text-emerald-400">then</span>({"design"})
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;.
            <span className="text-emerald-400">then</span>({"develop"})
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;.
            <span className="text-emerald-400">then</span>({"deploy"});
            <br />
            {"}"}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default HeroCode;
