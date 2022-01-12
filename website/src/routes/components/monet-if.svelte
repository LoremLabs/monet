<textarea class="bg-gray-100 w-full h-48 text-xs font-mono whitespace-pre-line" rows="20">
	&lt;monet-if 
		supports=&quot;ads/* webmon/coil&quot; 
		interval=&quot;3000&quot;
	&gt;

	&lt;p&gt;You're monetizing this site, thank you.&lt;/p&gt;

		&lt;monet-inline 
			slot=&quot;else&quot; 
			heading1=&quot;Consider going premium?&quot; 
			heading2=&quot;Buy a pass&quot; 
			subtitle=&quot;No Monetization Method Found&quot; 
			body=&quot;This would tell the user about the various options.&quot; cta=&quot;Learn More&quot; 
			link=&quot;/&quot;
		&gt;&lt;/monet-inline&gt;

	&lt;/monet-if&gt;	
</textarea>
